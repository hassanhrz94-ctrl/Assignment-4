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
];

// main function rendering
function renderJobs(){
    const container = document.getElementById('jobContainer')
    const emptyState = document.getElementById('emptyState');
    container.innerHTML = "";

    let filtered = jobs.filter(job =>{
        if(currentTab=== "all"){
            return job.status === "all"
        }
        else{
            return job.status === currentTab
        }
});
document.getElementById("tabCount").innerText = filtered.length + " jobs";
 if(filtered.length === 0){
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");

    filtered.forEach(job => {
      container.innerHTML += `
      <div class=" p-4 rounded shadow-sm bg-gray-50">
        <div class="flex justify-between items-center">
          <h3 class="font-bold">${job.company}</h3>
          <button onclick="deleteJob(${job.id})" class="text-red-500">Delete</button>
        </div>
        <p class="text-sm text-gray-600">${job.position}</p>
        <p class="text-sm text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>
        <p class="text-sm mt-2">${job.description}</p>

        <div class="flex gap-2 mt-3">
          <button onclick="setStatus(${job.id}, 'interview')" 
            class="px-3 py-1 rounded text-white ${job.status==='interview'?'bg-green-600':'bg-green-400'}">
            Interview
          </button>

          <button onclick="setStatus(${job.id}, 'rejected')" 
            class="px-3 py-1 rounded text-white ${job.status==='rejected'?'bg-red-600':'bg-red-400'}">
            Rejected
          </button>
        </div>
      </div>
      `;
    });
  }
 updateDashboard();
}
// status change functon
function setStatus (id,status){
    const job = jobs.find(jobs=>jobs.id===id)
    if(job.status=== status){
        job.status = "all"
    }
    else{
        job.status =status;
    }
    renderJobs();
}
// delete function
function deleteJob(id){
  jobs = jobs.filter(job => job.id !== id);
  renderJobs();
}

// update dashboard
function updateDashboard(){
    document.getElementById("totalCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText = jobs.filter(jobs=>jobs.status=== "interview").length
    document.getElementById("rejectedCount").innerText = jobs.filter(jobs=>jobs.status=== "rejected").length
}



