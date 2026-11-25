(() => {
"use strict";
const mount=document.getElementById("worksuiteToolkit");
if(!mount||mount.dataset.ready==="1")return;
mount.dataset.ready="1";
const slug=document.body.dataset.workspace||(location.pathname.split("/").filter(Boolean).slice(-2,-1)[0]||"todo");
const key="worksuite:toolkit:"+slug;
const blank=()=>({notes:[],tasks:[],reminders:[],links:[],tags:[],activity:[],backups:[]});
let data;
try{data={...blank(),...(JSON.parse(localStorage.getItem(key)||"{}")||{})}}catch(error){data=blank()}
for(const name of Object.keys(blank()))if(!Array.isArray(data[name]))data[name]=[];
const $=s=>mount.querySelector(s);
const id=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const esc=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const persist=()=>{try{localStorage.setItem(key,JSON.stringify(data))}catch(error){notify("Storage limit reached. Export a backup and remove old items.")}};
function notify(message){const el=$("#toolkitToast");if(el){el.textContent=message;el.classList.add("show");clearTimeout(notify.timer);notify.timer=setTimeout(()=>el.classList.remove("show"),2300)}}
function log(action,detail){data.activity.unshift({id:id(),action,detail,date:new Date().toLocaleString()});data.activity=data.activity.slice(0,30)}
function download(content,name,type){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement("a");a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function visible(text,q){return !q||String(text).toLowerCase().includes(q.toLowerCase())}
let search="",showArchived=false;
function render(){
 const notes=data.notes.filter(n=>(!!n.archived===showArchived)&&visible(n.title+" "+n.body+" "+(n.tags||[]).join(" "),search));
 const tasks=data.tasks.filter(t=>visible(t.title,search));
 const reminders=data.reminders.filter(r=>visible(r.title,search));
 const links=data.links.filter(l=>visible(l.title+" "+l.url,search));
 const tags=data.tags.filter(t=>visible(t,search));
 mount.innerHTML=`
 <section class="wsk-card">
  <div class="wsk-head">
   <div><div class="wsk-eyebrow">AVAILABLE IN ALL WORKSPACES</div><h2>Workspace Toolkit</h2><p>20+ local productivity tools · saved in this browser</p></div>
   <div class="wsk-top-actions"><button type="button" data-act="backup">Save backup</button><button type="button" data-act="export-json">Export JSON</button><button type="button" data-act="export-csv">Export CSV</button><button type="button" data-act="print">Print</button></div>
  </div>
  <div class="wsk-search-row"><input id="wskSearch" type="search" placeholder="Search notes, tasks, reminders, links and tags..." value="${esc(search)}"><button type="button" data-act="toggle-archive">${showArchived?"Show active notes":"Show archived notes"}</button><label class="wsk-file-btn">Import backup<input id="wskImport" type="file" accept="application/json,.json" hidden></label></div>
  <div class="wsk-grid">
   <article class="wsk-panel"><div class="wsk-panel-head"><h3>Quick notes <span>${notes.length}</span></h3><small>Pin · edit · duplicate · archive</small></div>
    <form data-form="note" class="wsk-form"><input name="title" maxlength="90" placeholder="Note title" required><textarea name="body" rows="2" maxlength="1200" placeholder="Write a quick note..."></textarea><input name="tags" placeholder="Labels (comma separated)"><button>Add note</button></form>
    <div class="wsk-list">${notes.length?notes.map(n=>'<div class="wsk-item"><div class="wsk-item-main"><b>'+(n.pinned?"★ ":"")+esc(n.title)+'</b><p>'+esc(n.body||"")+'</p><small>'+esc((n.tags||[]).join(" · "))+'</small></div><div class="wsk-item-actions"><button data-act="edit-note" data-id="'+n.id+'">Edit</button><button data-act="duplicate-note" data-id="'+n.id+'">Copy</button><button data-act="pin-note" data-id="'+n.id+'">'+(n.pinned?"Unpin":"Pin")+'</button><button data-act="archive-note" data-id="'+n.id+'">'+(n.archived?"Restore":"Archive")+'</button><button data-act="delete-note" data-id="'+n.id+'">Delete</button></div></div>').join(""):'<p class="wsk-empty">No notes here yet.</p>'}</div>
   </article>
   <article class="wsk-panel"><div class="wsk-panel-head"><h3>Personal checklist <span>${tasks.length}</span></h3><small>Track small actions</small></div>
    <form data-form="task" class="wsk-form"><input name="title" maxlength="160" placeholder="Add a checklist item..." required><input name="due" type="date" aria-label="Due date"><button>Add task</button></form>
    <div class="wsk-list">${tasks.length?tasks.map(t=>'<div class="wsk-item"><label class="wsk-check"><input type="checkbox" data-task-check="'+t.id+'" '+(t.done?"checked":"")+'> <span class="'+(t.done?"done":"")+'">'+esc(t.title)+'</span></label><div class="wsk-item-actions"><small>'+esc(t.due||"No due date")+'</small><button data-act="delete-task" data-id="'+t.id+'">Delete</button></div></div>').join(""):'<p class="wsk-empty">No checklist items yet.</p>'}</div>
   </article>
   <article class="wsk-panel"><div class="wsk-panel-head"><h3>Reminders <span>${reminders.length}</span></h3><small>Local reminders, no server notifications</small></div>
    <form data-form="reminder" class="wsk-form"><input name="title" maxlength="120" placeholder="Reminder title" required><input name="date" type="datetime-local" required><button>Add reminder</button></form>
    <div class="wsk-list">${reminders.length?reminders.map(r=>'<div class="wsk-item"><label class="wsk-check"><input type="checkbox" data-reminder-check="'+r.id+'" '+(r.done?"checked":"")+'> <span class="'+(r.done?"done":"")+'">'+esc(r.title)+'</span></label><div class="wsk-item-actions"><small>'+esc(r.date.replace("T"," "))+'</small><button data-act="delete-reminder" data-id="'+r.id+'">Delete</button></div></div>').join(""):'<p class="wsk-empty">No reminders set.</p>'}</div>
   </article>
   <article class="wsk-panel"><div class="wsk-panel-head"><h3>Quick links <span>${links.length}</span></h3><small>Open trusted sites in a new tab</small></div>
    <form data-form="link" class="wsk-form"><input name="title" maxlength="70" placeholder="Link title" required><input name="url" type="url" placeholder="https://example.com" required><button>Save link</button></form>
    <div class="wsk-list">${links.length?links.map(l=>'<div class="wsk-item"><div class="wsk-item-main"><b>'+esc(l.title)+'</b><small>'+esc(l.url)+'</small></div><div class="wsk-item-actions"><a href="'+esc(l.url)+'" target="_blank" rel="noopener noreferrer">Open ↗</a><button data-act="delete-link" data-id="'+l.id+'">Delete</button></div></div>').join(""):'<p class="wsk-empty">Save frequently used links here.</p>'}</div>
   </article>
   <article class="wsk-panel"><div class="wsk-panel-head"><h3>Labels & tags <span>${tags.length}</span></h3><small>Reusable labels for your workspace</small></div>
    <form data-form="tag" class="wsk-form"><input name="title" maxlength="32" placeholder="New label name" required><button>Add label</button></form>
    <div class="wsk-tags">${tags.map(t=>'<span>'+esc(t)+' <button data-act="delete-tag" data-tag="'+esc(t)+'" aria-label="Remove '+esc(t)+'">×</button></span>').join("")||'<small class="wsk-empty">No labels yet.</small>'}</div>
   </article>
   <article class="wsk-panel"><div class="wsk-panel-head"><h3>Activity & backup <span>${data.activity.length}</span></h3><small>Recent actions and recovery points</small></div>
    <div class="wsk-actions"><button data-act="backup">Create backup</button><button data-act="restore-backup" ${data.backups.length?"":"disabled"}>Restore latest</button><button data-act="clear-activity">Clear activity</button></div>
    <div class="wsk-backups"><b>${data.backups.length} backup(s) saved</b>${data.backups.slice(0,3).map((b,i)=>'<div class="wsk-item"><small>'+esc(b.date)+'</small><button data-act="restore-backup" data-index="'+i+'">Restore</button></div>').join("")}</div>
    <div class="wsk-list">${data.activity.slice(0,5).map(a=>'<div class="wsk-activity"><b>'+esc(a.action)+'</b><span>'+esc(a.detail)+'</span><small>'+esc(a.date)+'</small></div>').join("")||'<p class="wsk-empty">Actions will appear here.</p>'}</div>
   </article>
  </div>
  <div class="wsk-foot"><span>Workspace: <b>${esc(slug)}</b> · Data is stored locally</span><span>Import/export · Search · Archive · Labels · Backup/restore · Print</span><button type="button" data-act="reset-toolkit">Reset toolkit only</button></div>
  <div id="toolkitToast" class="wsk-toast" role="status" aria-live="polite"></div>
 </section>`;
}
function backup(){
 const snap={notes:data.notes,tasks:data.tasks,reminders:data.reminders,links:data.links,tags:data.tags,activity:data.activity};
 data.backups.unshift({date:new Date().toLocaleString(),snapshot:snap});
 data.backups=data.backups.slice(0,5);persist();log("Backup created","Saved a local toolkit backup");persist();render();notify("Backup saved in this browser");
}
function restore(index=0){
 const item=data.backups[index];if(!item||!item.snapshot)return;
 if(!confirm("Restore this toolkit backup? Current toolkit data will be replaced."))return;
 const backups=data.backups;data={...blank(),...item.snapshot,backups};log("Backup restored","Restored local toolkit data");persist();render();notify("Backup restored");
}
function csv(){
 const rows=[["Type","Title","Details","Status","Date"]];
 data.notes.forEach(x=>rows.push(["Note",x.title,x.body||"",x.archived?"Archived":"Active",(x.tags||[]).join("; ")]));
 data.tasks.forEach(x=>rows.push(["Task",x.title,"",x.done?"Completed":"Active",x.due||""]));
 data.reminders.forEach(x=>rows.push(["Reminder",x.title,"",x.done?"Completed":"Open",x.date]));
 data.links.forEach(x=>rows.push(["Link",x.title,x.url,"Saved",""]));
 const out=rows.map(row=>row.map(v=>'"'+String(v??"").replace(/"/g,'""')+'"').join(",")).join("\r\n");
 download(out,slug+"-toolkit.csv","text/csv;charset=utf-8");
}
function act(action,button){
 const item=[...data.notes,...data.tasks,...data.reminders,...data.links].find(x=>x.id===button.dataset.id);
 if(action==="backup"){backup();return}
 if(action==="restore-backup"){restore(Number(button.dataset.index||0));return}
 if(action==="export-json"){download(JSON.stringify({workspace:slug,exportedAt:new Date().toISOString(),data},null,2),slug+"-backup.json","application/json");log("JSON exported","Downloaded a toolkit backup");persist();notify("JSON backup exported");return}
 if(action==="export-csv"){csv();log("CSV exported","Downloaded toolkit lists");persist();notify("CSV exported");return}
 if(action==="print"){window.print();return}
 if(action==="toggle-archive"){showArchived=!showArchived;render();return}
 if(action==="clear-activity"){data.activity=[];persist();render();return}
 if(action==="reset-toolkit"){if(!confirm("Clear notes, checklist, reminders, links, labels and toolkit backups for this app? App data outside the toolkit will remain."))return;data=blank();persist();render();notify("Toolkit reset");return}
 if(!item&&action!=="delete-tag")return;
 const index=arr=>arr.findIndex(x=>x.id===button.dataset.id);
 if(action==="edit-note"){const n=data.notes[index(data.notes)];if(!n)return;const title=prompt("Edit note title",n.title);if(title===null)return;const body=prompt("Edit note",n.body||"");if(body===null)return;n.title=title.trim()||n.title;n.body=body;log("Note edited",n.title)}
 if(action==="duplicate-note"){const n=data.notes[index(data.notes)];if(!n)return;data.notes.unshift({...n,id:id(),title:n.title+" (copy)",pinned:false,archived:false});log("Note duplicated",n.title)}
 if(action==="pin-note"){const n=data.notes[index(data.notes)];if(!n)return;n.pinned=!n.pinned;log(n.pinned?"Note pinned":"Note unpinned",n.title)}
 if(action==="archive-note"){const n=data.notes[index(data.notes)];if(!n)return;n.archived=!n.archived;log(n.archived?"Note archived":"Note restored",n.title)}
 if(action==="delete-note"){if(!confirm("Delete this note?"))return;data.notes=data.notes.filter(x=>x.id!==button.dataset.id);log("Note deleted","Removed a toolkit note")}
 if(action==="delete-task"){data.tasks=data.tasks.filter(x=>x.id!==button.dataset.id);log("Checklist item deleted",item.title)}
 if(action==="delete-reminder"){data.reminders=data.reminders.filter(x=>x.id!==button.dataset.id);log("Reminder deleted",item.title)}
 if(action==="delete-link"){data.links=data.links.filter(x=>x.id!==button.dataset.id);log("Link deleted",item.title)}
 if(action==="delete-tag"){data.tags=data.tags.filter(x=>x!==button.dataset.tag);log("Label deleted",button.dataset.tag)}
 persist();render();
}
mount.addEventListener("click",event=>{
 const button=event.target.closest("[data-act]");if(button)act(button.dataset.act,button);
});
mount.addEventListener("change",event=>{
 const check=event.target.closest("[data-task-check]");if(check){const item=data.tasks.find(x=>x.id===check.dataset.taskCheck);if(item){item.done=check.checked;log(item.done?"Checklist completed":"Checklist reopened",item.title);persist();render()}return}
 const reminder=event.target.closest("[data-reminder-check]");if(reminder){const item=data.reminders.find(x=>x.id===reminder.dataset.reminderCheck);if(item){item.done=reminder.checked;log(item.done?"Reminder completed":"Reminder reopened",item.title);persist();render()}return}
 if(event.target.id==="wskImport"){
  const file=event.target.files?.[0];if(!file)return;const reader=new FileReader();
  reader.onload=()=>{try{const parsed=JSON.parse(String(reader.result));const imported=parsed.data||parsed;if(!imported||!Array.isArray(imported.notes)||!Array.isArray(imported.tasks))throw new Error("Unsupported backup");if(!confirm("Import this backup and replace current toolkit data?"))return;data={...blank(),...imported};for(const k of Object.keys(blank()))if(!Array.isArray(data[k]))data[k]=[];log("JSON imported","Restored data from a local JSON file");persist();render();notify("Backup imported")}catch(error){notify("Could not import this JSON backup.")}};
  reader.readAsText(file);
 }
});
mount.addEventListener("input",event=>{
 if(event.target.id==="wskSearch"){search=event.target.value;const pos=event.target.selectionStart;render();const field=$("#wskSearch");field.focus();field.setSelectionRange(pos,pos)}
});
mount.addEventListener("submit",event=>{
 const form=event.target.closest("form[data-form]");if(!form)return;event.preventDefault();
 const d=Object.fromEntries(new FormData(form));
 if(form.dataset.form==="note"){const tags=(d.tags||"").split(",").map(x=>x.trim()).filter(Boolean);data.notes.unshift({id:id(),title:d.title,body:d.body||"",tags,pinned:false,archived:false,createdAt:Date.now()});log("Note added",d.title)}
 if(form.dataset.form==="task"){data.tasks.unshift({id:id(),title:d.title,due:d.due||"",done:false});log("Checklist item added",d.title)}
 if(form.dataset.form==="reminder"){data.reminders.unshift({id:id(),title:d.title,date:d.date,done:false});log("Reminder created",d.title)}
 if(form.dataset.form==="link"){if(!/^https?:\/\//i.test(d.url)){notify("Enter a valid HTTP or HTTPS link.");return}data.links.unshift({id:id(),title:d.title,url:d.url});log("Quick link saved",d.title)}
 if(form.dataset.form==="tag"){const tag=d.title.trim();if(data.tags.some(x=>x.toLowerCase()===tag.toLowerCase())){notify("That label already exists.");return}data.tags.unshift(tag);log("Label created",tag)}
 persist();render();notify("Saved locally");
});
window.addEventListener("storage",event=>{if(event.key===key){try{data={...blank(),...(JSON.parse(event.newValue)||{})};render()}catch(error){}}});
render();
})();