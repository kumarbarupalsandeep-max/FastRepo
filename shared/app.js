(() => {
"use strict";
const catalog={
archive:["Archive Vault","Documents","Explore a sample retention and archive workspace.","archive","▤"],
backup:["Backup Centre","Security & devices","Review sample backup plans and recovery points.","archive","◈"],
edge:["Browse Studio","Collaboration","A browser-style start page with locally saved bookmarks.","browser","◎"],
editor:["Writing Assistant","Documents","Review text using simple local writing hints.","proofread","✎"],
"endpoint-manager":["Endpoint Desk","Security & devices","Review a demo device inventory and management checklist.","device","▣"],
"enterprise-mobility":["Mobility Centre","Security & devices","An illustrative mobile and device management workspace.","device","▣"],
"mobile-apps":["Mobile Hub","Collaboration","A responsive collection of quick app shortcuts.","mobile","▦"],
"m365-copilot":["Copilot Workspace","Power platform","A scripted assistant UI prototype; no AI service is connected.","assistant","✦"],
windows:["Device Settings","Security & devices","Explore a front-end device settings mockup.","windows","⊞"],
"windows-365":["Cloud PC","Security & devices","Explore a cloud desktop session mockup; no remote desktop is connected.","windows","▣"],
"cloud-app-security":["Cloud App Safety","Security & devices","A sample cloud application security dashboard.","security","◇"],
"defender-business":["Business Protection","Security & devices","A sample business protection checklist; no scanning occurs.","security","◇"],
"defender-endpoint":["Endpoint Protection","Security & devices","A sample endpoint protection dashboard; no scanning occurs.","security","◇"],
"defender-identity":["Identity Protection","Security & devices","A sample identity protection checklist.","security","◈"],
"defender-office":["Mail Protection","Security & devices","A sample email protection dashboard; no mail is inspected.","security","✉"],
"onedrive-business":["Business Files","Collaboration","A local business file catalogue prototype; no cloud upload occurs.","drive","◫"],
word:["Writer Studio","Documents","Document workspace for drafts and formatted writing.","editor","W"],
excel:["Grid Studio","Documents","Spreadsheet workspace with editable cells and CSV export.","grid","▦"],
powerpoint:["Presentation Studio","Documents","Create slides and present a simple deck.","slides","P"],
outlook:["Mail Desk","Collaboration","A local email interface prototype with inbox and sent drafts.","mail","✉"],
onenote:["Notes Studio","Documents","Collect short notes and organize ideas.","notes","N"],
onedrive:["Cloud Files","Collaboration","A local file list prototype. Files are not uploaded to cloud storage.","drive","◫"],
teams:["Team Chat","Collaboration","A channel-style chat prototype saved in this browser.","chat","◉"],
forms:["Form Builder","Collaboration","Add form questions and preview a simple form.","forms","☷"],
planner:["Plan Board","Planning","Move work across a lightweight kanban board.","planner","▤"],
lists:["Data Lists","Planning","Track records in a custom list.","list","☷"],
loop:["Shared Canvas","Collaboration","Build a page from reusable content blocks.","loop","◌"],
sharepoint:["Team Portal","Collaboration","Draft team announcements for a portal page.","portal","⌂"],
bookings:["Booking Desk","Planning","Schedule sample appointments locally.","booking","▦"],
clipchamp:["Video Studio","Media & design","Create a local video bin with file previews.","video","▷"],
designer:["Design Canvas","Media & design","Customize a simple promotional graphic.","design","✧"],
stream:["Media Library","Media & design","Organize local media file entries.","video","▶"],
sway:["Story Builder","Media & design","Arrange story cards into a simple narrative.","story","▧"],
visio:["Diagram Studio","Documents","Add steps to a lightweight process diagram.","diagram","◇"],
whiteboard:["Whiteboard","Collaboration","Draw freely on a blank board.","whiteboard","✎"],
project:["Project Timeline","Planning","Track milestones and dated project tasks.","project","◷"],
access:["Data Manager","Documents","Store simple records in a browser-based table.","database","▦"],
"power-bi":["Insight Dashboard","Power platform","Explore illustrative metrics and sample charts.","dashboard","▥"],
"power-apps":["App Builder","Power platform","Assemble a form-based app mockup.","appbuilder","⌘"],
"power-automate":["Flow Builder","Power platform","Connect sample triggers and actions into flows.","automation","⤳"],
copilot:["AI Companion","Power platform","Scripted assistant UI preview. No AI service is connected.","assistant","✦"],
defender:["Safety Centre","Security & devices","Sample security checklist. This does not scan or protect devices.","security","◇"],
intune:["Device Centre","Security & devices","A sample device inventory interface.","device","▣"],
"viva-engage":["Community Feed","Collaboration","Publish sample posts in a community feed.","social","◎"],
"viva-insights":["Focus Insights","Planning","Illustrative focus metrics, not personal analytics.","insights","◒"],
places:["Room Planner","Planning","Reserve sample meeting spaces locally.","places","⌖"],
"power-pages":["Page Builder","Power platform","Compose a simple landing page from content sections.","pages","▧"],
publisher:["Publication Studio","Documents","Draft a newsletter or publication.","editor","P"],
exchange:["Mail Service Desk","Collaboration","A sample mail-service operations overview.","mail","↔"],
identity:["Identity Centre","Security & devices","Review an illustrative identity and access checklist.","security","◈"],
"dynamics-365":["Customer Desk","Planning","Track sample customer contacts and follow-ups.","crm","◎"]
};
const routeParts=location.pathname.split("/").filter(Boolean);const slug=document.body.dataset.app||routeParts[routeParts.length-2]||routeParts[routeParts.length-1]||"word";const cfg=catalog[slug];if(!cfg){document.body.innerHTML="<main style=\"font:16px system-ui;padding:40px;color:#23314b\"><h1>Workspace unavailable</h1><p>This workspace is not registered.</p><a href=\"../index.html\">Back to WorkSuite</a></main>";throw new Error("Unknown workspace: "+slug)}
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const storeKey="worksuite:"+slug;
const starter={bookmarks:[],recovery:[],responses:[],formSubmissions:[],flowRuns:[],preferences:{},securityChecks:{},inbox:[{id:"inbox-1",from:"Alex Morgan",subject:"Project update",body:"The project brief is ready for review."}],selectedMail:"inbox-1",designTitle:"Make room for big ideas.",designColor:"#2563eb",board:"",
document:"<h2>Welcome to your workspace</h2><p>Start writing your ideas here. This document is saved locally in this browser.</p><p><br></p><p>Make something useful today.</p>",
cells:{},rows:8,slides:[{title:"Your next big idea",body:"A clear story starts with one simple thought."}],notes:[{id:"welcome",title:"Welcome note",body:"Capture an idea, a reminder or something to explore next."}],messages:[{id:"m1",who:"Alex",text:"Welcome to the team space. Use this room to share updates."}],sent:[],tasks:[{id:"t1",title:"Define the first milestone",status:"todo"},{id:"t2",title:"Review the project brief",status:"doing"},{id:"t3",title:"Share the weekly update",status:"done"}],questions:[{id:"q1",title:"What would you like to share?"}],records:[{id:"r1",name:"Sample item",detail:"Example record",status:"Active"}],blocks:[{id:"b1",title:"Project idea",body:"Add a thought or useful context to this block."}],posts:[{id:"p1",title:"Welcome to the team",body:"This space is ready for your updates."}],bookings:[],files:[],nodes:[{id:"n1",label:"Start"},{id:"n2",label:"Review"},{id:"n3",label:"Finish"}],flows:[],fields:[],devices:[{id:"d1",name:"Demo laptop",owner:"Workspace user",status:"Sample"}],sections:[{id:"s1",title:"Welcome",body:"Introduce your page with a short description."}],contacts:[{id:"c1",name:"Avery Morgan",company:"Northwind Studio",email:"avery@example.test"}],chatLog:[{id:"a1",who:"Guide",text:"Hi! This is an interface prototype. Connect your own AI provider to enable real answers."}]
};
let state;
try{state={...starter,...(JSON.parse(localStorage.getItem(storeKey)||"null")||{})}}catch(e){state={...starter}};for(const key of ["bookmarks","recovery","responses","formSubmissions","flowRuns","inbox"])if(!Array.isArray(state[key]))state[key]=starter[key];for(const key of ["preferences","securityChecks"])if(!state[key]||typeof state[key]!=="object")state[key]={};if(!state.selectedMail)state.selectedMail=state.inbox[0]?.id||"inbox-1";
function save(){try{localStorage.setItem(storeKey,JSON.stringify(state))}catch(e){toast("Could not save in this browser.")}}
function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2300)}
function empty(message){return '<div class="empty-hint">'+esc(message)+'</div>'}
function topButton(action,label,primary=false){return '<button class="'+(primary?"primary-btn":"tool-btn")+'" data-action="'+action+'">'+label+'</button>'}
function lineItem(icon,title,sub,trail=""){return '<div class="list-row"><span class="row-icon">'+icon+'</span><span class="row-copy"><b>'+esc(title)+'</b><small>'+esc(sub)+'</small></span>'+trail+'</div>'}
function formInput(name,placeholder,type="text"){return '<input class="field" name="'+name+'" type="'+type+'" placeholder="'+placeholder+'" required>'}
function toolbar(items,extra=""){return '<div class="module-toolbar">'+items.join("")+'<span class="toolbar-spacer"></span><span class="saved-label">'+extra+'</span></div>'}
function renderModule(){
 const kind=cfg[3];
 if(kind==="browser")return '<div class="module-body"><div class="module-heading"><div><h2>Start browsing</h2><p>Saved links are stored locally. This is not a connected browser.</p></div><span class="local-badge">Local bookmarks</span></div><form data-form="add-bookmark" class="form-row">'+formInput("title","Bookmark name")+formInput("url","https://example.com","url")+'<button class="primary-btn">＋ Save bookmark</button></form><div class="module-list">'+(state.bookmarks?.length?state.bookmarks.map(b=>lineItem("◎",b.title,b.url,'<a class="tool-btn" href="'+esc(b.url)+'" target="_blank" rel="noopener noreferrer">Open ↗</a>')).join(""):empty("Save a website link to start your bookmarks."))+'</div></div>';
 if(kind==="proofread")return '<div class="module-body"><div class="module-heading"><div><h2>Writing review</h2><p>Local text checks for word count, repeated spaces and a few common phrases. Not a full grammar checker.</p></div><span class="local-badge">On-device demo</span></div><textarea class="field-area" id="proofreadText" style="min-height:240px" placeholder="Paste or write your draft here...">'+esc(state.draft||"")+'</textarea><div class="form-row" style="margin-top:10px"><button class="primary-btn" data-action="review-text">Review writing</button><span class="saved-label" id="wordCount"></span></div><div id="writingReport" class="security-note">Your writing stays in this browser.</div></div>';
 if(kind==="archive")return '<div class="module-body"><div class="module-heading"><div><h2>Retention & recovery</h2><p>Illustrative archive and backup controls. No data is being backed up or retained on a server.</p></div><span class="local-badge">Demo environment</span></div><div class="module-grid"><div class="stat-tile"><span>Archive capacity</span><strong>68%</strong></div><div class="stat-tile"><span>Recovery points</span><strong>'+(state.recovery?.length||0)+'</strong></div><div class="stat-tile"><span>Policy status</span><strong style="font-size:15px">Sample</strong></div></div><form data-form="archive-point" class="form-row" style="margin-top:16px">'+formInput("label","Recovery point label")+'<button class="primary-btn">＋ Add demo point</button></form><div class="module-list">'+(state.recovery?.length?state.recovery.map(x=>lineItem("◈",x.label,x.date)).join(""):empty("No demo recovery points yet."))+'</div></div>';
 if(kind==="mobile")return '<div class="module-body"><div class="module-heading"><div><h2>Quick access</h2><p>A mobile-friendly app launcher preview.</p></div><span class="local-badge">Responsive demo</span></div><div class="module-grid">'+[["✓","To Do","../todo/index.html"],["▤","Writer","../word/index.html"],["▦","Grid","../excel/index.html"],["◉","Chat","../teams/index.html"],["✉","Mail","../outlook/index.html"],["◫","Files","../onedrive/index.html"]].map(x=>'<a class="stat-tile" style="text-decoration:none" href="'+x[2]+'"><span class="row-icon">'+x[0]+'</span><strong style="font-size:13px">'+x[1]+'</strong></a>').join("")+'</div><p class="inline-hint">These shortcuts open the individual frontend demos in this repository.</p></div>';
 if(kind==="windows")return '<div class="module-body"><div class="module-heading"><div><h2>Device experience</h2><p>Settings-style interface mockup. It cannot access operating-system settings or create a real remote session.</p></div><span class="local-badge">Illustrative UI</span></div><div class="module-list">'+[["⊞","Display","Screen and scale settings"],["◉","Network","Wi-Fi and connectivity status"],["◇","Privacy","App permission preferences"],["♧","Accounts","Profile and sign-in options"],["↻","Updates","Update status overview"]].map(x=>lineItem(x[0],x[1],x[2],'<span class="device-chip">Mockup</span>')).join("")+'</div><div class="security-note" style="margin-top:15px">Cloud PC mode is a visual prototype only. No remote Windows desktop, OS settings or virtual machine is connected.</div></div>';
 if(kind==="editor")return toolbar(['<button class="tool-btn" data-action="bold"><b>B</b></button>','<button class="tool-btn" data-action="italic"><i>I</i></button>','<button class="tool-btn" data-action="underline"><u>U</u></button>','<button class="tool-btn" data-action="heading">Heading</button>',topButton("save-document","Save locally",true)],"Autosave on this device")+'<div class="module-body"><div class="inline-hint">Independent document prototype · Formatting is stored in this browser</div><div class="editor-paper" id="docEditor" contenteditable="true" spellcheck="true">'+state.document+'</div></div>';
 if(kind==="grid"){
  let rows=state.rows||8,cols=6,letters=["A","B","C","D","E","F"];
  let table='<div class="sheet-wrap"><table class="sheet" id="sheet"><thead><tr><th></th>'+letters.map(x=>'<th>'+x+'</th>').join("")+'</tr></thead><tbody>';
  for(let r=1;r<=rows;r++){table+='<tr><th>'+r+'</th>';for(let c=0;c<cols;c++){let key=letters[c]+r;table+='<td contenteditable="true" spellcheck="false" data-cell="'+key+'">'+esc(state.cells[key]||"")+'</td>'}table+='</tr>'}
  table+='</tbody></table></div>';
  return toolbar([topButton("add-row","＋ Add row"),topButton("download-csv","Export CSV",true)],"Editable spreadsheet demo")+ '<div class="module-body"><div class="module-heading"><div><h2>Untitled workbook</h2><p>Click a cell to edit it. Changes save automatically.</p></div></div>'+table+'<div class="inline-hint">Tip: use this prototype for simple tabular notes. Advanced formulas and multi-sheet workbooks are not connected.</div></div>';
 }
 if(kind==="slides")return toolbar([topButton("add-slide","＋ New slide"),topButton("delete-slide","Delete current"),topButton("present","Present",true)],"Slide deck prototype")+'<div class="module-body"><div class="slide-stage"><div class="slide-preview"><small>WORKSPACE PRESENTATION</small><h2>'+esc(state.slides[state.activeSlide||0]?.title||"New slide")+'</h2><p>'+esc(state.slides[state.activeSlide||0]?.body||"Add a message to your slide.")+'</p></div></div><div class="slide-strip">'+state.slides.map((s,i)=>'<button class="slide-thumb '+(i===(state.activeSlide||0)?"active":"")+'" data-slide="'+i+'"><b>Slide '+(i+1)+'</b><br>'+esc(s.title)+'</button>').join("")+'</div><form data-form="edit-slide" class="form-row">'+formInput("title","Slide title") +formInput("body","Supporting message")+'<button class="primary-btn">Update slide</button></form></div>';
 if(kind==="mail"){
  const inbox=state.inbox||[];
  const selectedSent=String(state.selectedMail||"").startsWith("sent:");
  const selectedId=selectedSent?String(state.selectedMail).slice(5):state.selectedMail;
  const selected=selectedSent?state.sent.find(m=>m.id===selectedId):inbox.find(m=>m.id===selectedId);
  const message=selected||inbox[0]||{from:"No message",subject:"Inbox is empty",body:"Your sample inbox is empty."};
  return '<div class="module-body"><div class="mail-layout"><div class="mail-sidebar"><div class="module-heading"><h2>Inbox</h2><span class="local-badge">Local mail</span></div>'+inbox.map(m=>'<button type="button" class="mail-item '+(!selectedSent&&m.id===message.id?"active":"")+'" data-mail-select="'+m.id+'"><b>'+esc(m.subject)+'</b><small>'+esc(m.from)+'</small></button>').join("")+'<div class="section-label">SENT ITEMS · '+state.sent.length+'</div>'+state.sent.map(m=>'<div class="mail-sent-row"><button type="button" class="mail-item '+(selectedSent&&m.id===message.id?"active":"")+'" data-mail-select="sent:'+m.id+'"><b>'+esc(m.subject)+'</b><small>To '+esc(m.to)+'</small></button><button class="tool-btn" data-action="delete-sent" data-id="'+m.id+'">×</button></div>').join("")+'</div><div class="mail-main"><div class="module-heading"><div><h2>'+esc(message.subject)+'</h2><p>From '+esc(selectedSent?"You":message.from||"Sample sender")+(selectedSent?" · To "+esc(message.to):"")+'</p></div><span class="local-badge">'+(selectedSent?"Sent draft":"Sample inbox")+'</span></div><div class="mail-reading"><p>'+esc(message.body||"")+'</p></div><div class="section-label">COMPOSE A MESSAGE</div><form data-form="send-mail">'+formInput("to","Recipient email","email")+formInput("subject","Subject")+'<textarea class="field-area" name="body" placeholder="Write your message..." required></textarea><div class="form-row" style="margin-top:10px"><button class="primary-btn">Save to Sent</button></div></form><div class="inline-hint">Messages are stored in this browser only. Nothing is sent by email.</div></div></div></div>';
 }
 if(kind==="notes")return '<div class="module-body"><div class="module-heading"><div><h2>My notebook</h2><p>Quick thoughts and working notes.</p></div><span class="local-badge">Saved locally</span></div><form data-form="add-note" class="form-row">'+formInput("title","Note title")+formInput("body","A thought to remember")+'<button class="primary-btn">＋ Add note</button></form><div class="module-list">'+state.notes.map(n=>lineItem("N",n.title,n.body,'<button class="tool-btn" data-action="delete-note" data-id="'+n.id+'">Remove</button>')).join("")+'</div></div>';
 if(kind==="drive"||kind==="video"){
  return toolbar(['<label class="primary-btn" for="filePicker">＋ Add files</label><input id="filePicker" type="file" multiple hidden>'],kind==="video"?"Local media bin · no cloud upload":"Local file index · no cloud upload")+'<div class="module-body"><div class="module-heading"><div><h2>'+ (kind==="video"?"Media library":"My files")+'</h2><p>Files are selected in this browser; only their names and sizes are listed here.</p></div><span class="local-badge">'+state.files.length+' files</span></div><div class="module-list">'+(state.files.length?state.files.map(f=>lineItem(kind==="video"?"▶":"▤",f.name,f.size+" · Stored locally",'<button class="tool-btn" data-open-file="'+f.id+'">Preview</button> <button class="tool-btn" data-download-file="'+f.id+'">Download</button> <button class="tool-btn" data-action="delete-file" data-id="'+f.id+'">Remove</button>')).join(""):empty("Choose a file to add it to this local demo library."))+'</div></div>';
 }
 if(kind==="chat")return '<div class="module-body"><div class="chat-window"><div class="chat-head"># general <button class="tool-btn" data-action="clear-chat" style="float:right">Clear channel</button><span style="float:right;color:#95a2b6;font-weight:400;margin-right:8px">Local demo channel</span></div><div class="chat-messages" id="chatMessages">'+state.messages.map(m=>'<div class="bubble '+(m.who==="You"?"mine":"")+'"><b>'+esc(m.who)+'</b><br>'+esc(m.text)+'</div>').join("")+'</div><form data-form="send-chat" class="chat-compose">'+formInput("text","Write a message...")+'<button class="primary-btn">Send</button></form></div></div>';
 if(kind==="forms")return '<div class="module-body"><div class="module-heading"><div><h2>Form builder</h2><p>Add questions, preview the form and collect responses in this browser.</p></div><span class="local-badge">'+state.questions.length+' questions · '+state.responses.length+' responses</span></div><form data-form="add-question" class="form-row">'+formInput("title","Type a question...")+'<select class="field-select" name="type"><option>Short answer</option><option>Long answer</option><option>Choice</option></select><button class="primary-btn">＋ Add question</button></form><div class="module-list">'+state.questions.map((q,i)=>lineItem("?",(i+1)+". "+q.title,q.type||"Short answer",'<button class="tool-btn" data-action="delete-question" data-id="'+q.id+'">Remove</button>')).join("")+'</div><div class="section-label">RESPOND TO THIS FORM</div><form data-form="submit-response" class="module-list">'+state.questions.map(q=>'<label class="response-field"><b>'+esc(q.title)+'</b>'+(q.type==="Choice"?'<select class="field" name="answer_'+q.id+'"><option value="">Choose an option</option><option>Option A</option><option>Option B</option><option>Option C</option></select>':q.type==="Long answer"?'<textarea class="field-area" name="answer_'+q.id+'" required></textarea>':'<input class="field" name="answer_'+q.id+'" required>')+'</label>').join("")+(state.questions.length?'<button class="primary-btn">Submit local response</button>':empty("Add at least one question to enable the form preview."))+'</form><div class="section-label">SAVED RESPONSES · '+state.responses.length+'</div>'+(state.responses.length?state.responses.map((r,i)=>lineItem("✓","Response "+(i+1),r.date)).join(""):empty("Responses submitted in this browser will appear here."))+'<div class="inline-hint">Responses remain on this device; no server submission is configured.</div></div>';
 if(kind==="planner")return '<div class="module-body"><div class="module-heading"><div><h2>Project board</h2><p>Move work between stages as it progresses.</p></div><span class="local-badge">'+state.tasks.length+' tasks</span></div><form data-form="planner-task" class="form-row">'+formInput("title","Add a task to To do")+'<button class="primary-btn">＋ Add task</button></form><div class="kanban">'+["todo","doing","done"].map((status)=>'<div class="kanban-col"><div class="kanban-head"><span>'+({todo:"TO DO",doing:"IN PROGRESS",done:"COMPLETED"}[status])+'</span><span>'+state.tasks.filter(t=>t.status===status).length+'</span></div>'+state.tasks.filter(t=>t.status===status).map(t=>'<div class="kanban-card">'+esc(t.title)+'<div class="kanban-actions">'+(status!=="todo"?'<button data-move="'+t.id+'" data-status="todo">To do</button>':"")+(status!=="doing"?'<button data-move="'+t.id+'" data-status="doing">Doing</button>':"")+(status!=="done"?'<button data-move="'+t.id+'" data-status="done">Done</button>':"")+'<button data-action="delete-board-task" data-id="'+t.id+'">Delete</button></div></div>').join("")+'</div>').join("")+'</div></div>';
 if(kind==="list"||kind==="database")return '<div class="module-body"><div class="module-heading"><div><h2>'+ (kind==="database"?"Records table":"My tracking list")+'</h2><p>Add and review simple records. Data stays in this browser.</p></div><span class="local-badge">'+state.records.length+' records</span></div><form data-form="add-record" class="form-row">'+formInput("name","Name / item")+formInput("detail","Description / details")+'<select class="field-select" name="status"><option>Active</option><option>In progress</option><option>Done</option></select><button class="primary-btn">＋ Add record</button></form><div class="module-list">'+state.records.map(r=>lineItem("▤",r.name,r.detail+' · '+r.status,'<button class="tool-btn" data-action="delete-record" data-id="'+r.id+'">Remove</button>')).join("")+'</div></div>';
 if(kind==="loop")return '<div class="module-body"><div class="module-heading"><div><h2>Shared project page</h2><p>Collect ideas as simple content blocks.</p></div></div><form data-form="add-block" class="form-row">'+formInput("title","Block heading")+formInput("body","Write a short note")+'<button class="primary-btn">＋ Add block</button></form>'+state.blocks.map(b=>'<div class="story-card"><b>'+esc(b.title)+'</b><p>'+esc(b.body)+'</p><button class="tool-btn" data-action="delete-block" data-id="'+b.id+'">Remove block</button></div>').join("")+'</div>';
 if(kind==="portal")return '<div class="module-body"><div class="module-heading"><div><h2>Team announcements</h2><p>A small portal page for team updates.</p></div></div><form data-form="announcement">'+formInput("title","Announcement title")+'<textarea class="field-area" name="body" placeholder="Share an update..." required></textarea><div class="form-row" style="margin-top:9px"><button class="primary-btn">Publish locally</button></div></form><div class="section-label">RECENT UPDATES</div>'+state.posts.map(p=>'<div class="story-card"><b>'+esc(p.title)+'</b><p>'+esc(p.body)+'</p><button class="tool-btn" data-action="delete-post" data-id="'+p.id+'">Remove update</button></div>').join("")+'</div>';
 if(kind==="booking"||kind==="places")return '<div class="module-body"><div class="module-heading"><div><h2>'+(kind==="places"?"Reserve a room":"Schedule an appointment")+'</h2><p>Create a sample reservation stored only in this browser.</p></div></div><form data-form="booking" class="form-row">'+formInput("name","Your name")+formInput("purpose",kind==="places"?"Meeting purpose":"Appointment purpose")+'<input class="field" name="date" type="date" required><select class="field-select" name="time"><option>09:00</option><option>10:00</option><option>11:00</option><option>14:00</option><option>15:00</option></select><button class="primary-btn">Confirm demo booking</button></form><div class="section-label">UPCOMING BOOKINGS</div><div class="module-list">'+(state.bookings.length?state.bookings.map(b=>lineItem("▦",b.purpose,b.name+" · "+b.date+" at "+b.time,'<button class="tool-btn" data-action="cancel-booking" data-id="'+b.id+'">Cancel</button>')).join(""):empty("No bookings yet."))+'</div></div>';
 if(kind==="design")return toolbar([topButton("download-design","Export SVG",true)],"Edit the text and choose a colour")+'<div class="module-body"><div class="form-row"><input class="field" id="designTitle" value="'+esc(state.designTitle||"Make room for big ideas.")+'" placeholder="Graphic headline"><select class="field-select" id="designColor"><option value="#2563eb">Blue</option><option value="#159b78">Green</option><option value="#7659c9">Violet</option><option value="#d98742">Amber</option></select></div><div class="design-preview"><div class="design-card" id="designCard"><small style="font-size:9px;letter-spacing:2px;color:#7891bc">A NOTE FROM YOUR TEAM</small><h2 id="designHeadline">'+esc(state.designTitle||"Make room for big ideas.")+'</h2><p>Shape your next announcement or social graphic.</p></div></div><div class="inline-hint">Headline and color are saved in this browser.</div></div>';
 if(kind==="story")return '<div class="module-body"><div class="module-heading"><div><h2>My story</h2><p>Arrange short sections into a scrolling story.</p></div></div><form data-form="add-story" class="form-row">'+formInput("title","Story heading")+formInput("body","Story text")+'<button class="primary-btn">＋ Add card</button></form>'+state.posts.map(p=>'<div class="story-card"><small>STORY SECTION</small><h3>'+esc(p.title)+'</h3><p>'+esc(p.body)+'</p><button class="tool-btn" data-action="delete-post" data-id="'+p.id+'">Remove card</button></div>').join("")+'</div>';
 if(kind==="diagram")return toolbar([topButton("add-node","＋ Add process step",true)],"Simple process diagram")+'<div class="module-body"><svg class="diagram" id="diagram" viewBox="0 0 800 '+Math.max(320,state.nodes.length*95)+'" role="img" aria-label="Process diagram">'+state.nodes.map((n,i)=>'<g><rect x="275" y="'+(28+i*90)+'" width="250" height="55" rx="10"></rect><text x="400" y="'+(61+i*90)+'" text-anchor="middle">'+esc(n.label)+'</text></g>'+ (i<state.nodes.length-1?'<path d="M400 '+(83+i*90)+' V '+(116+i*90)+'" stroke="#88a4d6" stroke-width="2" fill="none"></path><path d="M394 '+(109+i*90)+' L400 '+(116+i*90)+' L406 '+(109+i*90)+'" stroke="#88a4d6" fill="none"></path>':"")).join("")+'</svg></div>';
 if(kind==="whiteboard")return toolbar([topButton("clear-board","Clear board"),topButton("download-board","Export PNG",true)],"Drawing is autosaved in this browser")+'<div class="module-body"><div class="canvas-wrap"><canvas class="whiteboard" id="whiteboard" width="1100" height="460"></canvas></div><div class="inline-hint">Draw with mouse, pen or touch. Your board is saved in this browser.</div></div>';
 if(kind==="project")return '<div class="module-body"><div class="module-heading"><div><h2>Project work plan</h2><p>Add a milestone with a target date.</p></div></div><form data-form="project-task" class="form-row">'+formInput("title","Milestone name")+'<input class="field" type="date" name="date" required><button class="primary-btn">＋ Add milestone</button></form><div class="timeline">'+state.tasks.map(t=>'<div class="timeline-row"><b>'+esc(t.title)+'</b><span>'+esc(t.date||"No date")+'</span><select class="field-select" data-project-status="'+t.id+'"><option value="todo" '+(t.status==="todo"?"selected":"")+' >To do</option><option value="doing" '+(t.status==="doing"?"selected":"")+' >In progress</option><option value="done" '+(t.status==="done"?"selected":"")+' >Done</option></select><button class="tool-btn" data-action="delete-project-task" data-id="'+t.id+'">Remove</button></div>').join("")+'</div></div>';
 if(kind==="dashboard"||kind==="insights")return '<div class="module-body"><div class="module-heading"><div><h2>'+(kind==="dashboard"?"Performance overview":"Focus overview")+'</h2><p>Illustrative sample metrics, not connected to a live data source.</p></div><span class="local-badge">Sample data</span></div><div class="module-grid">'+(kind==="dashboard"?[["Active users","2,480"],["Tasks completed","1,826"],["On-time rate","94%"]]:[["Focus time","12.5 h"],["Focus sessions","18"],["Breaks taken","7"]]).map(x=>'<div class="stat-tile"><span>'+x[0]+'</span><strong>'+x[1]+'</strong></div>').join("")+'</div><div class="section-label">WEEKLY ACTIVITY</div><div class="chart-bars">'+[42,66,54,80,61,91,72].map((h,i)=>'<div class="chart-col"><span style="height:'+h+'%"></span><small>'+["M","T","W","T","F","S","S"][i]+'</small></div>').join("")+'</div></div>';
 if(kind==="appbuilder")return '<div class="module-body"><div class="module-heading"><div><h2>Build a simple input form</h2><p>Add the fields you want your app screen to show.</p></div></div><form data-form="add-field" class="form-row">'+formInput("label","Field label")+'<select class="field-select" name="type"><option>Text</option><option>Email</option><option>Date</option><option>Number</option></select><button class="primary-btn">＋ Add field</button></form><div class="question-card"><b>APP PREVIEW</b>'+state.fields.map(f=>'<label class="section-label">'+esc(f.label)+'</label><input class="field" type="'+({Text:"text",Email:"email",Date:"date",Number:"number"}[f.type]||"text")+'" placeholder="'+esc(f.label)+'" disabled>').join("")+'</div></div>';
 if(kind==="automation")return '<div class="module-body"><div class="module-heading"><div><h2>Automation flows</h2><p>Design a trigger and an action. These flows are not connected to external services.</p></div></div><form data-form="add-flow" class="form-row"><select class="field-select" name="trigger"><option>When a new item is created</option><option>When a task is completed</option><option>At a scheduled time</option></select><select class="field-select" name="action"><option>Send a notification</option><option>Create a task</option><option>Update a record</option></select><button class="primary-btn">＋ Add flow</button></form><div class="module-list">'+(state.flows.length?state.flows.map(f=>lineItem("⤳",f.trigger,"Then: "+f.action,'<button class="tool-btn" data-action="run-flow" data-id="'+f.id+'">Test</button> <button class="tool-btn" data-action="delete-flow" data-id="'+f.id+'">Remove</button>')).join(""):empty("Your automation flows will appear here."))+'</div></div>';
 if(kind==="assistant")return '<div class="module-body"><div class="security-note">Prototype only: this assistant uses short local demo replies. No AI model, account or external API is connected.</div><div class="chat-window" style="margin-top:14px"><div class="chat-head">AI Companion · Demo mode</div><div class="chat-messages" id="chatMessages">'+state.chatLog.map(m=>'<div class="bubble '+(m.who==="You"?"mine":"")+'"><b>'+esc(m.who)+'</b><br>'+esc(m.text)+'</div>').join("")+'</div><form data-form="assistant-chat" class="chat-compose">'+formInput("text","Ask a sample question...")+'<button class="primary-btn">Send</button></form></div></div>';
 if(kind==="security")return '<div class="module-body"><div class="security-note"><b>Safe demo environment</b><br>This screen is illustrative only. It does not inspect your computer, scan files, change security settings or provide protection.</div><div class="module-grid" style="margin:16px 0">'+[["Protection status","Demo only"],["Threat detections","Not connected"],["Device health","Not checked"]].map(x=>'<div class="stat-tile"><span>'+x[0]+'</span><strong style="font-size:16px">'+x[1]+'</strong></div>').join("")+'</div><button class="primary-btn" data-action="demo-check">Run interface demo check</button><p class="inline-hint" id="securityResult">No real scan has been run.</p><div class="section-label">SAMPLE CHECKLIST</div>'+["Security settings review","Update status review","Account access review"].map(x=>lineItem("✓",x,"Example checklist item","<span class='device-chip'>Sample</span>")).join("")+'</div>';
 if(kind==="device")return '<div class="module-body"><div class="module-heading"><div><h2>Device inventory</h2><p>Example device records for layout testing only.</p></div></div><form data-form="add-device" class="form-row">'+formInput("name","Device name")+formInput("owner","Assigned user")+'<button class="primary-btn">＋ Add device</button></form><div class="module-list">'+state.devices.map(d=>lineItem("▣",d.name,d.owner+" · "+d.status,'<select class="field-select" data-device-status="'+d.id+'"><option value="Sample" '+(d.status==="Sample"?"selected":"")+' >Sample</option><option value="Active" '+(d.status==="Active"?"selected":"")+' >Active</option><option value="Needs review" '+(d.status==="Needs review"?"selected":"")+' >Needs review</option></select> <button class="tool-btn" data-action="delete-device" data-id="'+d.id+'">Remove</button>')).join("")+'</div></div>';
 if(kind==="social")return '<div class="module-body"><div class="module-heading"><div><h2>Community updates</h2><p>Share announcements and ideas with your group.</p></div></div><form data-form="add-post">'+formInput("title","Post headline")+'<textarea class="field-area" name="body" placeholder="What would you like to share?" required></textarea><div class="form-row" style="margin-top:9px"><button class="primary-btn">Publish post</button></div></form>'+state.posts.map(p=>'<div class="story-card"><b>'+esc(p.title)+'</b><p>'+esc(p.body)+'</p><small>Shared in this local demo</small></div>').join("")+'</div>';
 if(kind==="pages")return '<div class="module-body"><div class="module-heading"><div><h2>Landing page sections</h2><p>Add sections to create a simple page outline.</p></div></div><form data-form="add-section" class="form-row">'+formInput("title","Section title")+formInput("body","Section description")+'<button class="primary-btn">＋ Add section</button></form>'+state.sections.map(s=>'<div class="story-card"><b>'+esc(s.title)+'</b><p>'+esc(s.body)+'</p><button class="tool-btn" data-action="delete-section" data-id="'+s.id+'">Remove section</button></div>').join("")+'</div>';
 if(kind==="crm")return '<div class="module-body"><div class="module-heading"><div><h2>Customer contacts</h2><p>Track a basic local contact list and follow-up queue.</p></div></div><form data-form="add-contact" class="form-row">'+formInput("name","Contact name")+formInput("company","Company")+formInput("email","Email","email")+'<button class="primary-btn">＋ Add contact</button></form><div class="module-list">'+state.contacts.map(c=>lineItem("◎",c.name,c.company+" · "+c.email,'<button class="tool-btn" data-action="follow-up" data-id="'+c.id+'">Follow up</button> <button class="tool-btn" data-action="delete-contact" data-id="'+c.id+'">Remove</button>')).join("")+'</div></div>';
 return '<div class="module-body">'+empty("This workspace is being prepared.")+'</div>';
}
function shell(){
 document.title=cfg[0]+" — WorkSuite";
 document.body.dataset.workspace=slug;
  document.body.innerHTML='<div class="workspace-app"><header class="app-topbar"><a class="app-brand" href="../index.html"><span class="app-brand-mark">W</span><span>worksuite</span></a><div class="app-top-actions"><a class="top-link" href="../index.html">← All apps</a><button class="theme-btn" id="themeToggle">◐ <span id="themeLabel">Appearance</span></button></div></header><main class="app-content"><div class="app-intro"><div><div class="app-kicker">'+esc(cfg[1].toUpperCase())+' · WORKSPACE</div><h1>'+esc(cfg[0])+'</h1><p>'+esc(cfg[2])+'</p></div><span class="local-badge">Independent demo · Local data</span></div><section class="workspace-card" id="workspace">'+renderModule()+'</section><section class="workspace-toolkit-slot" id="worksuiteToolkit"></section><div class="module-footer"><span>WorkSuite · Independent prototype</span><span>Data stays in this browser unless you export it</span></div></main><div class="toast" id="toast" role="status"></div></div>';
}
function exportCsv(){
 const rows=[["Name","Details","Status"],...state.records.map(r=>[r.name,r.detail,r.status])];
 const csv=rows.map(row=>row.map(v=>'"'+String(v??"").replace(/"/g,'""')+'"').join(",")).join("\n");
 download(new Blob([csv],{type:"text/csv"}),"worksuite-records.csv");
}
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.click();URL.revokeObjectURL(url)}
function handleAction(action,button){
 const itemId=button?.dataset.id||"";
 if(action==="review-text"){
  const value=$("#proofreadText")?.value||"";state.draft=value;save();
  const words=value.trim()?value.trim().split(/\s+/).length:0,findings=[];
  if(/\s{2,}/.test(value))findings.push("More than one space was found.");
  if(/\b(very unique|more better|irregardless)\b/i.test(value))findings.push("Review a commonly misused phrase.");
  if(value&&!/[.!?]$/.test(value.trim()))findings.push("Consider ending the last sentence with punctuation.");
  $("#wordCount").textContent=words+" words";$("#writingReport").textContent=findings.length?findings.join(" "):"No basic demo checks were triggered. Review the text manually before sharing.";
 }
 if(action==="save-document"){save();toast("Document saved in this browser")}
 if(["bold","italic","underline","heading"].includes(action)){
  const commands={bold:"bold",italic:"italic",underline:"underline",heading:"formatBlock"};
  document.execCommand(commands[action],false,action==="heading"?"h2":undefined);$("#docEditor")?.focus();save();
 }
 if(action==="add-row"){state.rows=(state.rows||8)+1;save();refreshWorkspace()}
 if(action==="download-csv"){
  const rows=[["","A","B","C","D","E","F"]];
  for(let i=1;i<=(state.rows||8);i++){const row=[i];["A","B","C","D","E","F"].forEach(c=>row.push(state.cells[c+i]||""));rows.push(row)}
  const csv=rows.map(row=>row.map(v=>'"'+String(v??"").replace(/"/g,'""')+'"').join(",")).join("\n");
  download(new Blob([csv],{type:"text/csv"}),"worksuite-grid.csv");
 }
 if(action==="add-slide"){state.slides.push({title:"New slide "+(state.slides.length+1),body:"Add a supporting thought for your presentation."});state.activeSlide=state.slides.length-1;save();refreshWorkspace()}
 if(action==="delete-slide"){if(state.slides.length<=1){toast("Keep at least one slide in the deck.");return}state.slides.splice(state.activeSlide||0,1);state.activeSlide=Math.max(0,(state.activeSlide||0)-1);save();refreshWorkspace()}
 if(action==="present"){document.body.classList.toggle("presentation-mode");toast(document.body.classList.contains("presentation-mode")?"Presentation view on":"Presentation view off")}
 if(action==="add-node"){state.nodes.push({id:uid(),label:"New process step"});save();refreshWorkspace()}
 if(action==="clear-board"){const c=$("#whiteboard");if(c)c.getContext("2d").clearRect(0,0,c.width,c.height);state.board="";save();toast("Board cleared")}
 if(action==="download-board"){const c=$("#whiteboard");if(c)c.toBlob(blob=>{if(blob)download(blob,"worksuite-whiteboard.png")},"image/png")}
 if(action==="download-design"){
  const title=$("#designTitle")?.value||state.designTitle||"Your idea",color=$("#designColor")?.value||state.designColor||"#2563eb";
  state.designTitle=title;state.designColor=color;save();
  const safeTitle=esc(title).replace(/[\r\n]/g," ");
  const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" rx="24" fill="#f0f5ff"/><rect x="90" y="90" width="1020" height="450" rx="28" fill="#fff"/><text x="150" y="280" font-family="Poppins,Arial,sans-serif" font-size="58" font-weight="bold" fill="'+color+'">'+safeTitle+'</text><text x="150" y="360" font-family="Poppins,Arial,sans-serif" font-size="24" fill="#8494ad">Created with WorkSuite Design Canvas</text></svg>';
  download(new Blob([svg],{type:"image/svg+xml"}),"worksuite-design.svg");
 }
 if(action==="demo-check"){const out=$("#securityResult");if(out)out.textContent="Demo checklist displayed. No real system or file scan was performed."}
 const byId=(name)=>state[name]||[];
 const remove=(name)=>{state[name]=byId(name).filter(item=>item.id!==itemId)};
 if(action==="delete-sent")remove("sent");
 if(action==="delete-note")remove("notes");
 if(action==="delete-file")remove("files");
 if(action==="delete-question")remove("questions");
 if(action==="delete-node")remove("nodes");
 if(action==="delete-bookmark")remove("bookmarks");
 if(action==="delete-recovery")remove("recovery");
 if(action==="delete-board-task")remove("tasks");
 if(action==="delete-record")remove("records");
 if(action==="delete-block")remove("blocks");
 if(action==="delete-post")remove("posts");
 if(action==="cancel-booking")remove("bookings");
 if(action==="delete-flow")remove("flows");
 if(action==="delete-device")remove("devices");
 if(action==="delete-section")remove("sections");
 if(action==="delete-contact")remove("contacts");
 if(action==="delete-project-task")remove("tasks");
 if(action==="delete-field")remove("fields");
 if(action==="clear-chat"){state.messages=[];toast("Local channel cleared")}
 if(action==="run-flow"){
  const flow=state.flows.find(x=>x.id===itemId);
  if(flow){state.flowRuns=[...(state.flowRuns||[]),{id:uid(),flowId:flow.id,trigger:flow.trigger,action:flow.action,date:new Date().toLocaleString(),result:"Preview only"}];toast("Flow test completed locally. No external service was triggered.")}
 }
 if(action==="follow-up"){
  const contact=state.contacts.find(x=>x.id===itemId);
  if(contact){contact.followUp="Draft reminder created";contact.followUpAt=new Date().toLocaleString();toast("Follow-up noted for "+contact.name)}
 }
 if(action==="export-records"){
  const rows=[["Name","Details","Status"],...state.records.map(x=>[x.name,x.detail,x.status])];
  const csv=rows.map(row=>row.map(v=>'"'+String(v??"").replace(/"/g,'""')+'"').join(",")).join("\r\n");
  download(new Blob([csv],{type:"text/csv"}),"worksuite-records.csv");
 }
 if(["delete-sent","delete-note","delete-file","delete-question","delete-bookmark","delete-recovery","delete-board-task","delete-record","delete-block","delete-post","cancel-booking","delete-flow","delete-device","delete-section","delete-contact","delete-project-task","delete-field","delete-node","clear-chat","run-flow","follow-up"].includes(action)){
  save();refreshWorkspace();
 }
}
function refreshWorkspace(){$("#workspace").innerHTML=renderModule();setupCanvas()}
shell();theme();setupCanvas();
$("#workspace").addEventListener("click",e=>{
 const mail=e.target.closest("[data-mail-select]");if(mail){state.selectedMail=mail.dataset.mailSelect;save();refreshWorkspace();return}
 const filePreview=e.target.closest("[data-open-file]");if(filePreview){const file=state.files.find(x=>x.id===filePreview.dataset.openFile);if(file?.dataUrl)window.open(file.dataUrl,"_blank","noopener,noreferrer");else toast("Preview is available only for smaller files added in this browser.");return}
 const fileDownload=e.target.closest("[data-download-file]");if(fileDownload){const file=state.files.find(x=>x.id===fileDownload.dataset.downloadFile);if(file?.dataUrl){const a=document.createElement("a");a.href=file.dataUrl;a.download=file.name;a.click()}else toast("This file entry has no stored file data. Re-add a smaller file to download it.");return}
 const move=e.target.closest("[data-move]");if(move){const t=state.tasks.find(x=>x.id===move.dataset.move);if(t){t.status=move.dataset.status;save();refreshWorkspace()}return}
 const slide=e.target.closest("[data-slide]");if(slide){state.activeSlide=Number(slide.dataset.slide);refreshWorkspace();return}
 const action=e.target.closest("[data-action]");if(action)handleAction(action.dataset.action,action);
});
$("#workspace").addEventListener("submit",e=>{
 const form=e.target.closest("form[data-form]");if(!form)return;e.preventDefault();
 const d=Object.fromEntries(new FormData(form));const type=form.dataset.form;
 if(type==="add-bookmark"){if(!(d.url.startsWith("https://")||d.url.startsWith("http://"))){toast("Use a valid HTTP or HTTPS address.");return}state.bookmarks=[...(state.bookmarks||[]),{id:uid(),title:d.title,url:d.url}]}
 if(type==="archive-point")state.recovery=[{id:uid(),label:d.label,date:new Date().toLocaleString()},...(state.recovery||[])];
 if(type==="send-mail")state.sent.unshift({id:uid(),to:d.to,subject:d.subject,body:d.body});
 if(type==="add-note")state.notes.unshift({id:uid(),title:d.title,body:d.body});
 if(type==="send-chat")state.messages.push({id:uid(),who:"You",text:d.text});
 if(type==="add-question")state.questions.push({id:uid(),title:d.title,type:d.type});
 if(type==="planner-task")state.tasks.unshift({id:uid(),title:d.title,status:"todo"});
 if(type==="add-record")state.records.unshift({id:uid(),name:d.name,detail:d.detail,status:d.status});
 if(type==="add-block")state.blocks.unshift({id:uid(),title:d.title,body:d.body});
 if(type==="announcement"||type==="add-post"||type==="add-story")state.posts.unshift({id:uid(),title:d.title,body:d.body});
 if(type==="booking")state.bookings.unshift({id:uid(),name:d.name,purpose:d.purpose,date:d.date,time:d.time});
 if(type==="edit-slide"){const slide=state.slides[state.activeSlide||0];if(slide){slide.title=d.title;slide.body=d.body}}
 if(type==="project-task")state.tasks.unshift({id:uid(),title:d.title,date:d.date,status:"todo"});
 if(type==="add-device")state.devices.unshift({id:uid(),name:d.name,owner:d.owner,status:"Sample"});
 if(type==="add-section")state.sections.unshift({id:uid(),title:d.title,body:d.body});
 if(type==="add-flow")state.flows.unshift({id:uid(),trigger:d.trigger,action:d.action});
 if(type==="add-field")state.fields.push({id:uid(),label:d.label,type:d.type});
 if(type==="assistant-chat"){state.chatLog.push({id:uid(),who:"You",text:d.text});let reply="This is a local preview only. Connect an AI provider and backend to generate live answers.";if(/task|plan/i.test(d.text))reply="Try breaking your goal into smaller tasks, then assign each one a due date.";else if(/hello|hi/i.test(d.text))reply="Hello! I’m a sample assistant interface. No AI model is connected yet.";state.chatLog.push({id:uid(),who:"Demo assistant",text:reply})}
 if(type==="add-contact")state.contacts.unshift({id:uid(),name:d.name,company:d.company,email:d.email});
 if(type==="rename-node"){const node=state.nodes.find(x=>x.id===d.nodeId);if(node)node.label=d.label}
 if(type==="submit-response"){const answers={};for(const [key,value] of Object.entries(d))if(key.startsWith("answer_"))answers[key.slice(7)]=value;state.responses.unshift({id:uid(),answers,date:new Date().toLocaleString()})}
 if(type==="app-preview"){const answers={};for(const [key,value] of Object.entries(d))if(key.startsWith("field_"))answers[key.slice(6)]=value;state.formSubmissions.unshift({id:uid(),answers,date:new Date().toLocaleString()})}
 if(type==="add-post"||type==="announcement"||type==="add-story"){if(!Array.isArray(state.posts))state.posts=[]}
 save();refreshWorkspace();toast("Saved in this browser");
});
$("#workspace").addEventListener("input",e=>{
 if(e.target.id==="docEditor"){state.document=e.target.innerHTML;save()}
 if(e.target.dataset.cell){state.cells[e.target.dataset.cell]=e.target.innerText;save()}
 if(e.target.id==="designTitle"){state.designTitle=e.target.value;const headline=$("#designHeadline");if(headline)headline.textContent=e.target.value;save()}
});
$("#workspace").addEventListener("change",e=>{
 if(e.target.id==="filePicker"){
  Array.from(e.target.files||[]).forEach(file=>{
   const entry={id:uid(),name:file.name,size:formatSize(file.size),type:file.type,dataUrl:null};
   state.files.unshift(entry);
   if(file.size<=850000){const reader=new FileReader();reader.onload=()=>{entry.dataUrl=String(reader.result||"");save()};reader.readAsDataURL(file)}
  });
  save();refreshWorkspace()
 }
 if(e.target.id==="designColor"){state.designColor=e.target.value;$("#designHeadline")?.style.setProperty("color",e.target.value);$("#designCard")?.style.setProperty("border-top","7px solid "+e.target.value);save()}
 if(e.target.dataset.projectStatus){const task=state.tasks.find(x=>x.id===e.target.dataset.projectStatus);if(task){task.status=e.target.value;save();refreshWorkspace()}}
 if(e.target.dataset.deviceStatus){const device=state.devices.find(x=>x.id===e.target.dataset.deviceStatus);if(device){device.status=e.target.value;save();refreshWorkspace()}}
 if(e.target.dataset.preference){state.preferences=state.preferences||{};state.preferences[e.target.dataset.preference]=e.target.checked;save();toast("Demo preference saved locally")}
});
function formatSize(bytes){if(bytes<1024)return bytes+" B";if(bytes<1048576)return (bytes/1024).toFixed(1)+" KB";return (bytes/1048576).toFixed(1)+" MB"}
function setupCanvas(){const c=$("#whiteboard");if(!c)return;const ctx=c.getContext("2d");ctx.strokeStyle="#2563eb";ctx.lineWidth=3;ctx.lineCap="round";if(state.board){const image=new Image();image.onload=()=>ctx.drawImage(image,0,0,c.width,c.height);image.src=state.board}let drawing=false;function pos(e){const r=c.getBoundingClientRect();return{x:(e.clientX-r.left)*c.width/r.width,y:(e.clientY-r.top)*c.height/r.height}}function finish(){if(!drawing)return;drawing=false;try{state.board=c.toDataURL("image/png");save()}catch(error){toast("Could not save this drawing.")}}c.addEventListener("pointerdown",e=>{drawing=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);c.setPointerCapture(e.pointerId)});c.addEventListener("pointermove",e=>{if(!drawing)return;const p=pos(e);ctx.lineTo(p.x,p.y);ctx.stroke()});c.addEventListener("pointerup",finish);c.addEventListener("pointercancel",finish) }
function theme(){const dark=localStorage.getItem("worksuite:theme")==="dark";document.body.classList.toggle("dark",dark);$("#themeLabel").textContent=dark?"Dark":"Light"}
$("#themeToggle").addEventListener("click",()=>{const dark=!document.body.classList.contains("dark");localStorage.setItem("worksuite:theme",dark?"dark":"light");theme()});
const toolkitScript=document.createElement("script");toolkitScript.src="../shared/toolkit.js";document.body.appendChild(toolkitScript);

})();