(function(){
  var app=document.getElementById('app');
  var state={view:'home',level:null,lesson:null,content:null,openAuth:false};

  function hash(){
    return (location.hash||'#/home').replace(/^#\/?/,'').split('/');
  }
  function go(view,level,id){
    var path='#/'+view+(level?'/'+level:'')+(id?'/'+id:'');
    if(location.hash===path){render();return;}
    location.hash=path;
  }
  function parseRoute(){
    var p=hash(),view=p[0]||'home';
    state.view=view;state.level=p[1]||null;state.lesson=p[2]||null;
    if(['home','paths','level','lesson','profile','certificates','cert','verify','admin'].indexOf(view)===-1)state.view='home';
  }
  function render(){
    parseRoute();
    var v=state.view;
    if(state.openAuth){app.innerHTML=(v==='home'?Views.home():Views.shell('home','<b>Overview</b>','<div class="hero"></div>'))+Views.auth();bind();return;}
    var html;
    if(v==='home')html=Views.home();
    else if(v==='paths')html=Views.paths();
    else if(v==='level')html=Views.level(state.level||'beginner');
    else if(v==='lesson'){
      if(!state.content){app.innerHTML=Views.shell('lesson','<b>Loading</b>','<p style="color:var(--muted)">Loading lesson…</p>');return;}
      html=Views.lesson(state.level||'beginner',state.lesson||'',state.content);
    }
    else if(v==='profile')html=Views.profile();
    else if(v==='certificates')html=Views.certificates();
    else if(v==='cert')html=Views.cert(state.level||'beginner');
    else if(v==='verify'){
      var id=(location.search.match(/[?&]verify=([^&]+)/)||[])[1]||state.lesson;
      app.innerHTML=Views.verify(id,{valid:false});
      if(id)Store.verifyCert(decodeURIComponent(id),function(d){app.innerHTML=Views.verify(decodeURIComponent(id),d);bind();});
      bind();return;
    }
    else if(v==='admin')html=Store.isAdmin()?Views.admin():Views.profile();
    else html=Views.home();
    app.innerHTML=html;
    bind();
    if(v==='lesson')seedEditor();
  }
  function seedEditor(){
    var ta=document.getElementById('chal-editor'),frame=document.getElementById('chal-preview');
    if(!ta)return;
    var found=Store.findLesson(state.level,state.lesson);
    var seed='<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>My page</title>\n</head>\n<body>\n  <h1>Hello, world</h1>\n  <p>Start here and build your answer.</p>\n</body>\n</html>';
    if(state.content&&found&&state.content[state.lesson]&&state.content[state.lesson].codeExample)seed=state.content[state.lesson].codeExample;
    ta.value=seed;
    if(frame)frame.srcdoc=seed;
  }
  function feedback(ok,msg){
    var el=document.getElementById('chal-feedback');if(!el)return;
    el.className='feedback show '+(ok?'ok':'err');
    el.innerHTML=msg;
  }
  function submitChallenge(){
    var ta=document.getElementById('chal-editor');if(!ta)return;
    var code=ta.value.trim(),lower=code.toLowerCase();
    var hasTags=/<[a-z][\s\S]*>/i.test(code);
    var text=code.replace(/<[^>]*>/g,'').replace(/<!doctype[^>]*>/gi,'').trim();
    var structure=/<(!doctype|html|head|body|h1|p|div|section|main)/i.test(code);
    if(hasTags&&text.length>8&&structure){
      Store.completeLesson(state.level,state.lesson,code,function(){
        feedback(true,'✓ Challenge passed. Nice work.');
        var next=Store.nextLesson(state.level,state.lesson);
        setTimeout(function(){next?go('lesson',state.level,next):go('level',state.level);},900);
      });
    }else{
      feedback(false,'Not quite. Write real HTML with opening and closing tags, some visible text, and a proper page structure.');
    }
  }
  function sendAI(){
    var input=document.getElementById('ai-input'),msgs=document.getElementById('ai-msgs');
    if(!input||!msgs)return;
    var text=input.value.trim();if(!text)return;
    input.value='';
    msgs.insertAdjacentHTML('beforeend','<div class="msg user">'+Views.esc(text)+'</div>');
    msgs.insertAdjacentHTML('beforeend','<div class="msg bot" data-typing>Thinking…</div>');
    msgs.scrollTop=msgs.scrollHeight;
    Store.askTutor(text,function(reply){
      var t=msgs.querySelector('[data-typing]');
      if(t)t.remove();
      msgs.insertAdjacentHTML('beforeend','<div class="msg bot">'+Views.esc(reply)+'</div>');
      msgs.scrollTop=msgs.scrollHeight;
    });
  }
  function bind(){
    document.querySelectorAll('[data-go]').forEach(function(el){
      el.addEventListener('click',function(e){
        if(el.hasAttribute('disabled')||el.dataset.locked)return;
        var v=el.dataset.go,l=el.dataset.level,id=el.dataset.id;
        if(v==='auth'){state.openAuth=true;render();return;}
        go(v,l,id);
      });
    });
    document.querySelectorAll('[data-action]').forEach(function(el){
      el.addEventListener('click',function(e){
        e.stopPropagation();
        var a=el.dataset.action;
        if(a==='toggle-module'){
          var body=el.parentElement.querySelector('.module-body');
          el.parentElement.classList.toggle('open');
          body.style.display=body.style.display==='none'?'block':'none';
        }
        else if(a==='chal-run'){
          var ta=document.getElementById('chal-editor'),f=document.getElementById('chal-preview');
          if(ta&&f)f.srcdoc=ta.value;
        }
        else if(a==='chal-reset')seedEditor();
        else if(a==='chal-submit')submitChallenge();
        else if(a==='mark-done'){
          Store.completeLesson(el.dataset.level,el.dataset.id,'',function(){render();});
        }
        else if(a==='ai-toggle')document.getElementById('ai-panel').classList.toggle('open');
        else if(a==='ai-close')document.getElementById('ai-panel').classList.remove('open');
        else if(a==='ai-send')sendAI();
        else if(a==='auth-close'){state.openAuth=false;render();}
        else if(a==='auth-submit'){
          var name=document.getElementById('auth-name').value.trim(),msg=document.getElementById('auth-msg');
          if(name.length<2){msg.textContent='Use at least 2 characters.';return;}
          msg.textContent='Saving…';
          Store.register(name,function(ok,err){
            if(ok){state.openAuth=false;render();}
            else msg.textContent=err||'Could not sign in.';
          });
        }
        else if(a==='sign-out'){Store.signOut();go('home');}
        else if(a==='copy-verify'){
          var link=location.origin+location.pathname+'?verify='+el.dataset.id;
          if(navigator.clipboard)navigator.clipboard.writeText(link).catch(function(){});
          el.textContent='Copied ✓';
        }
      });
    });
    var aiInput=document.getElementById('ai-input');
    if(aiInput)aiInput.addEventListener('keydown',function(e){if(e.key==='Enter')sendAI();});
  }
  window.addEventListener('hashchange',render);
  if(typeof CURRICULUM==='undefined'){
    app.innerHTML='<div style="padding:40px;color:var(--muted)">Loading curriculum…</div>';
    setTimeout(function(){location.reload();},600);
    return;
  }
  var verifyId=(location.search.match(/[?&]verify=([^&]+)/)||[])[1];
  if(verifyId){location.hash='#/verify/'+encodeURIComponent(verifyId);}
  Store.loadContent(function(content){state.content=content;render();});
})();