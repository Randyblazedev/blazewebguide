var Store = (function(){
  var API = 'https://quest-seq-medicaid-surveys.trycloudflare.com';
  var USER = localStorage.getItem('bwg_user') || null;
  var PROGRESS = {};
  try { PROGRESS = JSON.parse(localStorage.getItem('bwg_prog') || '{}'); } catch(e){}
  var CONTENT = null;
  var LEVELS = ['beginner','intermediate','advanced','pro'];
  var COLORS = { beginner:'#15803d', intermediate:'#1d4ed8', advanced:'#b45309', pro:'#b91c1c' };
  var SOFT = { beginner:'#eaf6ee', intermediate:'#eef2ff', advanced:'#fef3e7', pro:'#fef2f2' };
  var NAMES = { beginner:'Beginner', intermediate:'Intermediate', advanced:'Advanced', pro:'Pro' };
  var DESCS = {
    beginner:'Master HTML, CSS, JavaScript, and Git fundamentals. Build your first real projects with hands-on guidance.',
    intermediate:'Responsive design, APIs, ES6+, and deployment. Level up with real-world projects.',
    advanced:'React, Node.js, databases, and testing. Build full-stack applications from scratch.',
    pro:'System design, security, DevOps, and architecture. Production-ready expertise for senior roles.'
  };

  function saveProgress(){
    localStorage.setItem('bwg_prog', JSON.stringify(PROGRESS));
    if(USER){
      fetch(API+'/api/progress',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username:USER,completed:Object.keys(PROGRESS).filter(function(k){return PROGRESS[k]})})}).catch(function(){});
    }
  }
  function countLessons(){
    var total=0;
    if(typeof CURRICULUM==='undefined')return 0;
    Object.keys(CURRICULUM).forEach(function(k){
      CURRICULUM[k].modules.forEach(function(m){total+=m.lessons.length});
    });
    return total;
  }
  function doneCount(){ return Object.keys(PROGRESS).filter(function(k){return PROGRESS[k]}).length; }
  function levelProgress(id){
    var l=CURRICULUM[id];if(!l)return {d:0,t:0,p:0};
    var t=0,d=0;
    l.modules.forEach(function(m){m.lessons.forEach(function(x){t++;if(PROGRESS[x.id])d++})});
    return {d:d,t:t,p:t?Math.round(d/t*100):0};
  }
  function levelDone(id){var x=levelProgress(id);return x.t>0&&x.p>=100;}
  function levelUnlocked(id){
    var i=LEVELS.indexOf(id);return i===0||levelDone(LEVELS[i-1]);
  }
  function findLesson(level,id){
    var l=CURRICULUM[level];if(!l)return null;
    for(var mi=0;mi<l.modules.length;mi++){
      for(var li=0;li<l.modules[mi].lessons.length;li++){
        if(l.modules[mi].lessons[li].id===id)return {lesson:l.modules[mi].lessons[li],module:l.modules[mi],mi:mi,li:li};
      }
    }
    return null;
  }
  function nextLesson(level,id){
    var l=CURRICULUM[level];if(!l)return null;
    for(var mi=0;mi<l.modules.length;mi++){
      for(var li=0;li<l.modules[mi].lessons.length;li++){
        if(l.modules[mi].lessons[li].id===id){
          if(li+1<l.modules[mi].lessons.length)return l.modules[mi].lessons[li+1].id;
          if(mi+1<l.modules.length)return l.modules[mi+1].lessons[0].id;
          return null;
        }
      }
    }
    return null;
  }
  function resumeLesson(){
    for(var li=0;li<LEVELS.length;li++){
      var lvl=CURRICULUM[LEVELS[li]];if(!lvl)continue;
      for(var mi=0;mi<lvl.modules.length;mi++){
        for(var x=0;x<lvl.modules[mi].lessons.length;x++){
          var les=lvl.modules[mi].lessons[x];
          if(!PROGRESS[les.id])return {level:LEVELS[li],id:les.id};
        }
      }
    }
    return null;
  }
  function loadContent(done){
    if(CONTENT){done(CONTENT);return;}
    fetch('curriculum_content.js').then(function(r){return r.text()}).then(function(t){
      try{
        var s=t.indexOf('{'),d=0,e=-1;
        for(var i=s;i<t.length;i++){
          if(t[i]==='{')d++;
          else if(t[i]==='}'){d--;if(d===0){e=i;break;}}
        }
        CONTENT=e>s?JSON.parse(t.substring(s,e+1)):{};
      }catch(err){CONTENT={};}
      done(CONTENT);
    }).catch(function(){CONTENT={};done(CONTENT);});
  }
  function register(username,done){
    fetch(API+'/api/register',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({username:username})}).then(function(r){return r.json()}).then(function(d){
      if(d.success||d.user){USER=username;localStorage.setItem('bwg_user',username);done(true,null);}
      else done(false,d.error||'Could not register');
    }).catch(function(){USER=username;localStorage.setItem('bwg_user',username);done(true,null);});
  }
  function signOut(){USER=null;localStorage.removeItem('bwg_user');}
  function isAdmin(){return USER&&(USER.toLowerCase()==='randyblazedev');}
  function completeLesson(level,id,code,done){
    PROGRESS[id]=true;saveProgress();
    fetch(API+'/api/complete',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({username:USER||'guest',lessonId:id,code:code||''})}).catch(function(){});
    if(done)done();
  }
  function saveCert(level,certId){
    if(!USER)return;
    fetch(API+'/api/cert/save',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({username:USER,level:level,certId:certId,name:USER})}).catch(function(){});
  }
  function verifyCert(certId,done){
    fetch(API+'/api/cert/verify/'+encodeURIComponent(certId)).then(function(r){return r.json()}).then(done)
      .catch(function(){done({valid:false,offline:true});});
  }
  function askTutor(message,done){
    fetch(API+'/api/tutor',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({message:message,username:USER||''})}).then(function(r){return r.json()})
      .then(function(d){done(d.reply||'No answer available.')}).catch(function(){done('Tutor is offline right now. Try again shortly.');});
  }
  return {
    API:API, LEVELS:LEVELS, COLORS:COLORS, SOFT:SOFT, NAMES:NAMES, DESCS:DESCS,
    getUser:function(){return USER;},
    getProgress:function(){return PROGRESS;},
    saveProgress:saveProgress, countLessons:countLessons, doneCount:doneCount,
    levelProgress:levelProgress, levelDone:levelDone, levelUnlocked:levelUnlocked,
    findLesson:findLesson, nextLesson:nextLesson, resumeLesson:resumeLesson,
    loadContent:loadContent, register:register, signOut:signOut, isAdmin:isAdmin,
    completeLesson:completeLesson, saveCert:saveCert, verifyCert:verifyCert, askTutor:askTutor
  };
})();