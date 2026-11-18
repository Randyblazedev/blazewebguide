var Views = (function(){
  function esc(s){
    return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function bar(pct,color){
    return '<div class="progress"><i style="width:'+pct+'%;background:'+color+'"></i></div>';
  }
  function sidebar(view,level){
    var user=Store.getUser();
    var items=Store.LEVELS.map(function(k){
      var x=Store.levelProgress(k),unlocked=Store.levelUnlocked(k);
      return '<button class="nav-item '+(view==='level'&&level===k?'active':'')+'" data-go="level" data-level="'+k+'" '+(unlocked?'':'disabled')+'>'+
        '<span class="dot" style="background:'+Store.COLORS[k]+'"></span>'+Store.NAMES[k]+
        (Store.levelDone(k)?' <span class="badge">✓</span>':'<span class="count">'+x.d+'/'+x.t+'</span>')+
        (unlocked?'':'<span class="lock">🔒</span>')+'</button>';
    }).join('');
    return '<aside class="sidebar">'+
      '<div class="brand"><div class="brand-mark">B</div><div class="brand-name">Blaze<span>Web</span>Guide</div></div>'+
      '<nav class="side-nav">'+
        '<div class="nav-label">Learn</div>'+
        '<button class="nav-item '+(view==='home'?'active':'')+'" data-go="home">⌂ &nbsp; Overview</button>'+
        '<button class="nav-item '+(view==='paths'?'active':'')+'" data-go="paths">◫ &nbsp; All paths</button>'+
        '<div class="nav-label">Levels</div>'+items+
        '<div class="nav-label">Account</div>'+
        '<button class="nav-item '+(view==='profile'?'active':'')+'" data-go="profile">◉ &nbsp; Profile</button>'+
        '<button class="nav-item '+(view==='certificates'?'active':'')+'" data-go="certificates">✦ &nbsp; Certificates</button>'+
        (Store.isAdmin()?'<button class="nav-item" data-go="admin">⚙ &nbsp; Admin</button>':'')+
      '</nav>'+
      '<div class="side-foot"><div class="user-chip"><div class="avatar">'+(user?esc(user.charAt(0).toUpperCase()):'?')+'</div>'+
        '<div class="user-name">'+(user?esc(user):'Guest learner')+'</div></div></div>'+
    '</aside>';
  }
  function topbar(crumb){
    return '<header class="topbar"><div class="crumb">'+crumb+'</div><div class="top-actions">'+
      '<button class="btn btn-ghost btn-sm" data-go="certificates">Certificates</button>'+
      (Store.getUser()?'<button class="btn btn-primary btn-sm" data-go="profile">'+esc(Store.getUser())+'</button>':'<button class="btn btn-accent btn-sm" data-go="auth">Sign in</button>')+
      '</div></header>';
  }
  function bottomNav(view){
    return '<nav class="bottom-nav">'+
      '<a data-go="home" class="'+(view==='home'?'active':'')+'"><span>⌂</span>Home</a>'+
      '<a data-go="paths" class="'+(view==='paths'||view==='level'?'active':'')+'"><span>◫</span>Paths</a>'+
      '<a data-go="profile" class="'+(view==='profile'?'active':'')+'"><span>◉</span>Profile</a>'+
      '<a data-go="certificates" class="'+(view==='certificates'?'active':'')+'"><span>✦</span>Certs</a>'+
    '</nav>';
  }
  function aiDock(){
    return '<button class="ai-fab" data-action="ai-toggle" title="Ask the tutor">✦</button>'+
      '<div class="ai-panel" id="ai-panel"><div class="ai-head"><span>Ask the tutor</span><button class="btn btn-ghost btn-sm" data-action="ai-close">×</button></div>'+
      '<div class="ai-msgs" id="ai-msgs"><div class="msg bot">Hey. Stuck on a concept? Ask me anything about web development.</div></div>'+
      '<div class="ai-input"><input id="ai-input" placeholder="e.g. What is the DOM?" aria-label="Ask the tutor"><button data-action="ai-send">Send</button></div></div>';
  }
  function shell(view,crumb,content,level){
    return '<div class="shell">'+sidebar(view,level)+'<div class="main">'+topbar(crumb)+
      '<div class="mobile-bar"><div class="brand"><div class="brand-mark">B</div><div class="brand-name">Blaze<span>Web</span>Guide</div></div></div>'+
      '<main class="content">'+content+'</main></div></div>'+bottomNav(view)+aiDock();
  }
  function home(){
    var total=Store.countLessons(),done=Store.doneCount(),resume=Store.resumeLesson();
    var cards=Store.LEVELS.map(function(k){
      var x=Store.levelProgress(k),unlocked=Store.levelUnlocked(k),complete=Store.levelDone(k);
      return '<div class="card level-card card-hover" style="--lvl-color:'+Store.COLORS[k]+';--lvl-soft:'+Store.SOFT[k]+'" data-go="level" data-level="'+k+'" '+(unlocked?'':'data-locked="1"')+'>'+
        '<span class="tag">'+Store.NAMES[k]+'</span>'+
        '<h3>'+Store.NAMES[k]+(complete?' ✓':'')+'</h3>'+
        '<p>'+Store.DESCS[k]+'</p>'+
        bar(x.p,Store.COLORS[k])+
        '<div class="progress-label"><span>'+x.d+' of '+x.t+' lessons</span><span>'+x.p+'%'+(unlocked?'':' · locked')+'</span></div>'+
      '</div>';
    }).join('');
    var resumeHtml=resume?'<div class="continue"><div class="icon">▶</div><div class="info"><div class="k">Pick up where you left off</div>'+
      '<div class="t">'+esc(Store.findLesson(resume.level,resume.id).lesson.title)+'</div></div>'+
      '<button class="btn btn-accent btn-sm" data-go="lesson" data-level="'+resume.level+'" data-id="'+resume.id+'">Continue</button></div>':
      '<div class="continue"><div class="icon">✦</div><div class="info"><div class="k">Ready when you are</div><div class="t">Start the Beginner path</div></div>'+
      '<button class="btn btn-accent btn-sm" data-go="level" data-level="beginner">Start</button></div>';
    return shell('home','<b>Overview</b>',
      '<section class="hero"><span class="eyebrow">A complete web development curriculum</span>'+
      '<h1 class="display">Learn to build the web.<br><em>One lesson at a time.</em></h1>'+
      '<p class="lede">1,050 hands-on lessons across four levels — from your first HTML tag to production-ready system design. Each level builds on the last, and you only move forward when you can actually do the work.</p>'+
      '<div class="stats-row"><div class="stat"><div class="n">'+total+'</div><div class="l">Lessons</div></div>'+
      '<div class="stat"><div class="n">4</div><div class="l">Levels</div></div>'+
      '<div class="stat"><div class="n">'+done+'</div><div class="l">Completed</div></div>'+
      '<div class="stat"><div class="n">'+Math.round(done/(total||1)*100)+'%</div><div class="l">Overall</div></div></div></section>'+
      resumeHtml+
      '<div style="margin:32px 0 14px"><h2 class="section-title">Choose your path</h2><p style="color:var(--muted);font-size:13px">Complete a level to unlock the next.</p></div>'+
      '<div class="grid g2">'+cards+'</div>');
  }
  function paths(){
    var cards=Store.LEVELS.map(function(k){
      var x=Store.levelProgress(k),unlocked=Store.levelUnlocked(k);
      return '<div class="card level-card card-hover" style="--lvl-color:'+Store.COLORS[k]+';--lvl-soft:'+Store.SOFT[k]+'" data-go="level" data-level="'+k+'" '+(unlocked?'':'data-locked="1"')+'>'+
        '<span class="tag">'+Store.NAMES[k]+'</span><h3>'+Store.NAMES[k]+'</h3><p>'+Store.DESCS[k]+'</p>'+
        bar(x.p,Store.COLORS[k])+'<div class="progress-label"><span>'+x.d+'/'+x.t+'</span><span>'+x.p+'%</span></div></div>';
    }).join('');
    return shell('paths','<b>All paths</b>',
      '<section class="hero"><span class="eyebrow">The curriculum</span><h1 class="display">Four paths. <em>One destination.</em></h1>'+
      '<p class="lede">Every path is a set of focused modules with short lessons and a hands-on challenge to prove you learned it.</p></section>'+
      '<div class="grid g2">'+cards+'</div>');
  }
  function level(id){
    var l=CURRICULUM[id],x=Store.levelProgress(id);
    if(!l)return home();
    var modules=l.modules.map(function(m,mi){
      var rows=m.lessons.map(function(les){
        var d=Store.getProgress()[les.id];
        return '<button class="lesson-row '+(d?'done':'')+'" data-go="lesson" data-level="'+id+'" data-id="'+les.id+'">'+
          '<span class="check">✓</span><span class="name">'+esc(les.title)+'</span><span class="dur">'+esc(les.duration||'')+'</span></button>';
      }).join('');
      var md=m.lessons.filter(function(les){return Store.getProgress()[les.id]}).length;
      return '<div class="module'+(mi===0?' open':'')+'"><button class="module-head" data-action="toggle-module">'+
        '<span class="num">'+String(mi+1).padStart(2,'0')+'</span><span class="title">'+esc(m.title)+'</span>'+
        '<span class="meta">'+md+'/'+m.lessons.length+'</span><span class="chev">▶</span></button>'+
        '<div class="module-body" '+(mi===0?'':'style="display:none"')+'>'+rows+'</div></div>';
    }).join('');
    return shell('level','<b>'+Store.NAMES[id]+'</b> / Path',
      '<div class="path-head"><div><span class="eyebrow">'+x.d+' of '+x.t+' lessons complete</span>'+
      '<h1 class="display" style="font-size:2.3rem">'+Store.NAMES[id]+'</h1><p class="lede">'+Store.DESCS[id]+'</p></div>'+
      '<div class="card" style="min-width:180px"><div class="progress-label" style="margin:0 0 8px"><span>Progress</span><b>'+x.p+'%</b></div>'+bar(x.p,Store.COLORS[id])+'</div></div>'+
      modules,id);
  }
  function lesson(level,id,content){
    var found=Store.findLesson(level,id);
    if(!found)return home();
    var les=found.lesson,c=content[id]||{};
    var next=Store.nextLesson(level,id);
    var steps=[];
    var lvls=Store.LEVELS;
    lvls.forEach(function(k){
      var l=CURRICULUM[k];if(!l)return;
      l.modules.forEach(function(m){
        m.lessons.forEach(function(x){
          if(steps.length<6)steps.push({k:k,id:x.id,title:x.title,done:!!Store.getProgress()[x.id],current:x.id===id});
        });
      });
    });
    var stepHtml=steps.slice(0,5).map(function(s){
      return '<div class="step '+(s.done?'done':'')+' '+(s.current?'current':'')+'"><span class="n">'+(s.done?'✓':(s.current?'•':''))+'</span>'+esc(s.title)+'</div>';
    }).join('');
    var body=c.content?c.content:'<p>This lesson is being prepared. Check back shortly.</p>';
    var code=c.codeExample?'<h3>Example</h3><pre><code>'+esc(c.codeExample)+'</code></pre>':'';
    var chal=les.challenge?'<div class="chal-box"><h3>Your challenge</h3><p class="chal-desc">'+esc(les.challenge)+'</p>'+
      '<div class="editor-wrap"><div class="editor-bar"><span>index.html</span><button data-action="chal-run">▶ Preview</button>'+
      '<button class="ghost" data-action="chal-reset">↺ Reset</button></div>'+
      '<textarea class="editor" id="chal-editor" spellcheck="false"></textarea></div>'+
      '<div class="preview-wrap"><div class="bar">Live preview</div><iframe id="chal-preview" title="Preview"></iframe></div>'+
      '<div class="feedback" id="chal-feedback"></div>'+
      '<div class="lesson-nav"><button class="btn btn-accent" data-action="chal-submit">Submit challenge</button>'+
      (next?'<button class="btn btn-ghost" data-go="lesson" data-level="'+level+'" data-id="'+next+'">Next lesson →</button>':'')+'</div></div>':'';
    return shell('lesson','<b>'+Store.NAMES[level]+'</b> / '+esc(found.module.title),
      '<div class="lesson-layout"><div class="lesson-main">'+
      '<h1>'+esc(les.title)+'</h1><div class="lesson-meta"><span>'+esc(les.duration||'')+'</span><span>'+Store.NAMES[level]+'</span>'+
      '<span>'+(Store.getProgress()[id]?'✓ Completed':'Not completed')+'</span></div>'+
      '<div class="lesson-body">'+body+code+'</div>'+chal+
      '<div class="lesson-nav"><button class="btn btn-ghost" data-go="level" data-level="'+level+'">← Back to path</button>'+
      (!les.challenge?'<button class="btn btn-primary" data-action="mark-done" data-level="'+level+'" data-id="'+id+'">Mark complete ✓</button>':'')+
      (next?'<button class="btn btn-primary" data-go="lesson" data-level="'+level+'" data-id="'+next+'">Next lesson →</button>':'')+'</div>'+
      '</div><aside class="lesson-side"><div class="side-box"><h4>Your progress</h4>'+stepHtml+'</div>'+
      '<div class="side-box"><h4>Need help?</h4><p style="font-size:13px;color:var(--muted)">Ask the tutor in the bottom-right corner — it can explain any concept in this lesson.</p></div></aside></div>',level);
  }
  function profile(){
    var user=Store.getUser(),done=Store.doneCount(),total=Store.countLessons();
    var rows=Store.LEVELS.map(function(k){
      var x=Store.levelProgress(k);
      return '<div class="step" style="padding:14px 0"><span class="dot" style="width:9px;height:9px;border-radius:50%;background:'+Store.COLORS[k]+'"></span>'+
        '<div style="flex:1"><div style="font-weight:600;font-size:14px">'+Store.NAMES[k]+'</div>'+
        '<div style="font-size:12px;color:var(--muted)">'+x.d+' / '+x.t+' lessons</div></div><b style="font-size:13px">'+x.p+'%</b></div>';
    }).join('');
    return shell('profile','<b>Profile</b>',
      '<section class="hero"><span class="eyebrow">Your progress</span><h1 class="display">Learning <em>profile</em></h1></section>'+
      '<div class="card" style="display:flex;align-items:center;gap:18px;margin-bottom:18px">'+
      '<div class="avatar" style="width:56px;height:56px;font-size:22px">'+(user?esc(user.charAt(0).toUpperCase()):'?')+'</div>'+
      '<div style="flex:1"><h2 style="font-family:var(--display);font-size:1.4rem">'+(user?esc(user):'Guest learner')+'</h2>'+
      '<p style="color:var(--muted);font-size:13px">'+done+' of '+total+' lessons completed</p></div>'+
      (user?'<button class="btn btn-ghost btn-sm" data-action="sign-out">Sign out</button>':'<button class="btn btn-accent btn-sm" data-go="auth">Sign in</button>')+'</div>'+
      '<div class="card"><h2 class="section-title">Path progress</h2>'+rows+'</div>');
  }
  function certificates(){
    var rows=Store.LEVELS.map(function(k){
      var x=Store.levelProgress(k),done=Store.levelDone(k);
      return '<div class="card" style="display:flex;align-items:center;gap:14px;margin-bottom:10px;'+(done?'border-color:'+Store.COLORS[k]:'')+'">'+
        '<div style="width:42px;height:42px;border-radius:50%;background:'+(done?Store.SOFT[k]:'#f0eee8')+';display:grid;place-items:center;font-size:18px">'+(done?'🏆':'🔒')+'</div>'+
        '<div style="flex:1"><div style="font-weight:600">'+Store.NAMES[k]+' Certificate</div>'+
        '<div style="font-size:12px;color:var(--muted)">'+(done?'Complete — view certificate':x.d+'/'+x.t+' lessons ('+x.p+'%)')+'</div></div>'+
        (done?'<button class="btn btn-ghost btn-sm" data-go="cert" data-level="'+k+'">View →</button>':'')+'</div>';
    }).join('');
    return shell('certificates','<b>Certificates</b>',
      '<section class="hero"><span class="eyebrow">Proof of work</span><h1 class="display">Earn your <em>certificate</em></h1>'+
      '<p class="lede">Complete every lesson in a level to unlock a verifiable certificate you can share.</p></section>'+rows);
  }
  function cert(level){
    if(!Store.levelDone(level))return certificates();
    var id='BWG-'+Math.floor(Math.random()*900000000+100000000);
    var date=new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
    Store.saveCert(level,id);
    return shell('cert','<b>Certificate</b>',
      '<div class="cert '+(level==='pro'?'pro':'')+'" style="border-color:'+Store.COLORS[level]+'">'+
      '<img class="mark" src="logo.png" alt=""><h1>BlazeWebGuide</h1><div class="rule" style="background:'+Store.COLORS[level]+'"></div>'+
      '<p style="color:var(--muted);font-size:13px">Certificate of Completion</p>'+
      '<div class="who">'+(Store.getUser()||'Learner')+'</div>'+
      '<p style="color:var(--muted);font-size:13px">has successfully completed the</p>'+
      '<h2 style="font-family:var(--display);color:'+Store.COLORS[level]+';font-size:1.7rem;margin:12px 0">'+Store.NAMES[level]+' Level</h2>'+
      '<p style="color:var(--muted);font-size:13px">'+Store.DESCS[level]+'</p>'+
      '<div class="id">'+id+' · '+date+'</div></div>'+
      '<div class="lesson-nav" style="justify-content:center"><button class="btn btn-ghost" data-go="certificates">← All certificates</button>'+
      '<button class="btn btn-primary" data-action="copy-verify" data-id="'+id+'">Copy verification link</button></div>');
  }
  function verify(id,data){
    var ok=data&&data.valid;
    return shell('home','<b>Certificate verification</b>',
      '<div style="max-width:600px;margin:30px auto;text-align:center">'+
      '<div style="width:64px;height:64px;border-radius:50%;background:'+(ok?'var(--green-soft)':'#fef2f2')+';color:'+(ok?'var(--green)':'var(--red)')+';display:grid;place-items:center;font-size:28px;margin:0 auto 16px">'+(ok?'✓':'×')+'</div>'+
      '<h1 class="display" style="font-size:2rem">'+(ok?'Valid certificate':'Certificate not found')+'</h1>'+
      (ok?'<p style="color:var(--muted);margin-top:12px"><b>'+esc(data.cert.name)+'</b> completed the '+esc(data.cert.level)+' level.</p>':'<p style="color:var(--muted);margin-top:12px">No certificate matches '+esc(id)+'</p>')+
      '<div style="font-family:var(--mono);font-size:12px;color:var(--faint);margin-top:14px">'+esc(id)+'</div>'+
      '<div class="lesson-nav" style="justify-content:center"><button class="btn btn-ghost" data-go="home">← Home</button></div></div>');
  }
  function auth(){
    return '<div style="position:fixed;inset:0;background:rgba(20,22,27,.55);z-index:100;display:grid;place-items:center;padding:20px">'+
      '<div class="card" style="max-width:380px;width:100%;text-align:center;padding:30px">'+
      '<h2 style="font-family:var(--display);font-size:1.5rem">Welcome to BlazeWebGuide</h2>'+
      '<p style="color:var(--muted);font-size:13px;margin:10px 0 20px">Choose a username to save your progress across devices.</p>'+
      '<div class="field"><input id="auth-name" placeholder="Your username" maxlength="20" autofocus></div>'+
      '<div id="auth-msg" class="hint"></div>'+
      '<button class="btn btn-accent" style="width:100%;margin-top:8px" data-action="auth-submit">Start learning</button>'+
      '<button class="btn btn-ghost btn-sm" style="width:100%;margin-top:8px" data-action="auth-close">Cancel</button></div></div>';
  }
  function admin(){
    return shell('home','<b>Admin</b>',
      '<section class="hero"><span class="eyebrow">Administration</span><h1 class="display">Admin <em>overview</em></h1>'+
      '<p class="lede">All 1,050 lessons are unlocked for your account.</p></section>'+
      '<div class="card"><h2 class="section-title">Curriculum</h2><p style="color:var(--muted);font-size:13px">'+
      Store.LEVELS.map(function(k){return Store.NAMES[k]+': '+CURRICULUM[k].modules.reduce(function(a,m){return a+m.lessons.length},0)}).join(' · ')+
      '</p></div>');
  }
  return {shell:shell,esc:esc,bar:bar,home:home,paths:paths,level:level,lesson:lesson,
    profile:profile,certificates:certificates,cert:cert,verify:verify,auth:auth,admin:admin};
})();