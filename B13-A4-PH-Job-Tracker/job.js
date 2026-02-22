let currentTab = "all";

// all job data
let jobs =[
     {id:1, company:"Mobile First Corp", position:"React Developer", location:"Remote", type:"Full-time", salary:"$120k", description:"Build web apps.", status:"all"},
  {id:2, company:"WebFlow Agency", position:"Frontend Dev", location:"USA", type:"Part-time", salary:"$80k", description:"UI/UX projects.", status:"all"},
  {id:3, company:"DataViz Solutions", position:"Data Engineer", location:"NYC", type:"Full-time", salary:"$110k", description:"Data pipelines.", status:"all"},
  {id:4, company:"CloudFirst Inc", position:"Backend Dev", location:"Remote", type:"Full-time", salary:"$130k", description:"Cloud systems.", status:"all"},
  {id:5, company:"Innovation Labs", position:"UI Engineer", location:"Austin", type:"Full-time", salary:"$100k", description:"Design systems.", status:"all"},
  {id:6, company:"MegaCorp", position:"JS Developer", location:"LA", type:"Full-time", salary:"$125k", description:"Enterprise apps.", status:"all"},
  {id:7, company:"StartupXYZ", position:"Full Stack", location:"Remote", type:"Contract", salary:"$95k", description:"Startup product.", status:"all"},
  {id:8, company:"TechCorp", position:"Senior Frontend", location:"SF", type:"Full-time", salary:"$140k", description:"Modern SPA apps.", status:"all"}
]

// main function rendering
function renderJobs(){
    const container = document.getElementById('jobcontainer')
    const emptyState = document.getElementById('emptyState');
    container.innerHTML = "";

    let filtered = jobs.filter(job =>{
        if(currentTab=== "all"){
            return job.status = "all"
        }
        else{
            return job.status = currentTab
        }
});
document.getElementById("tabCount").innerText = filtered.length + " jobs";

if(filtered.length=== 0){
    emptyState.classList.remove ("hidden")
}
else{
    emptyState.classList.add("hidden")
}
}