const techData={
frontend:[["⚛","React.js","Component-based library for building interactive user interfaces with virtual DOM",["JSX","Hooks","Redux"]],["N","Next.js","Full-stack React framework with server-side rendering and static generation",["SSR","SSG","API Routes"]],["V","Vue.js","Progressive framework for building user interfaces with excellent developer experience",["Composition API","Vuex","Nuxt"]],["A","Angular","Comprehensive platform for building scalable web applications",["TypeScript","RxJS","CLI"]],["▤","Tailwind CSS","Utility-first CSS framework for rapid UI development",["JIT","Components","Responsive"]],["ϟ","Vite","Next generation frontend tooling with lightning fast builds",["HMR","ESM","Rollup"]]],
backend:[["⬢","Node.js","JavaScript runtime built on Chrome's V8 engine for server-side development",["Express.js","NPM","TypeScript"]],["Py","Python","Versatile programming language with powerful frameworks for web development",["Django","FastAPI","Flask"]],["Go","Golang","Fast, statically typed language designed for modern applications",["Gin","Goroutines","Microservices"]],["J","Java","Enterprise-grade platform with robust frameworks for large-scale applications",["Spring Boot","Hibernate","Maven"]],[".N",".NET Core","Cross-platform framework for building modern applications",["C#","Entity Framework","Azure"]],["Rb","Ruby","Dynamic language focused on simplicity and productivity",["Rails","Sinatra","RubyGems"]]],
mobile:[["⚛","React Native","Cross-platform mobile development using React and JavaScript",["Expo","Navigation","Redux"]],["F","Flutter","Google's UI toolkit for natively compiled applications",["Dart","Widgets","Material"]],["iOS","iOS Native","Native iOS development using Swift and Xcode",["Swift","SwiftUI","Core Data"]],["A","Android Native","Native Android development using Kotlin and Android Studio",["Kotlin","Jetpack","Room"]],["X","Xamarin","Microsoft's cross-platform solution using C# and .NET",["C#","Forms","MVVM"]],["P","PWA","Progressive Web Apps with native-like mobile experiences",["Service Worker","Manifest","Offline"]]],
cloud:[["AWS","Amazon AWS","Comprehensive cloud computing platform with extensive services",["EC2","Lambda","S3"]],["A","Microsoft Azure","Enterprise cloud platform with integrated development tools",["App Service","Functions","DevOps"]],["G","Google Cloud","Google's cloud computing platform with AI and ML capabilities",["Compute Engine","Cloud Run","BigQuery"]],["D","Docker","Containerization platform for consistent application deployment",["Containers","Images","Compose"]],["K8s","Kubernetes","Container orchestration system for automating deployment and scaling",["Pods","Services","Helm"]],["CI","CI/CD Pipeline","Automated build, test, and deployment workflows",["Jenkins","GitHub Actions","GitLab CI"]]],
database:[["P","PostgreSQL","Advanced open-source relational database with JSON support",["ACID","JSON","Extensions"]],["M","MongoDB","Flexible NoSQL document database for modern applications",["Documents","Aggregation","Sharding"]],["R","Redis","In-memory data structure store for caching and real-time applications",["Cache","Pub/Sub","Streams"]],["My","MySQL","Popular open-source relational database for reliable applications",["InnoDB","Replication","Clustering"]],["E","Elasticsearch","Distributed search and analytics engine for complex data",["Search","Analytics","Kibana"]],["G","GraphQL","Query language and runtime for flexible API data fetching",["Schema","Resolvers","Apollo"]]]};
const techDescriptions={
 frontend:["Frontend Technologies","Modern frameworks and libraries for creating exceptional user interfaces"],
 backend:["Backend Technologies","Robust server-side technologies for scalable and secure applications"],
 mobile:["Mobile Technologies","Native and cross-platform solutions for iOS and Android development"],
 cloud:["Cloud & DevOps Technologies","Modern cloud infrastructure and deployment technologies"],
 database:["Database Technologies","Robust data storage solutions for modern applications"]
};
function showTechnology(category){
 const items=techData[category];
 if(!items) return;
 document.getElementById("tech-title").textContent=techDescriptions[category][0];
 document.getElementById("tech-subtitle").textContent=techDescriptions[category][1];
 document.getElementById("tech-cards").innerHTML=items.map(item=>`<div class="col-12 col-md-6 col-lg-4"><article class="tech-card"><div class="tech-logo">${item[0]}</div><h4>${item[1]}</h4><p>${item[2]}</p><div class="tech-tags">${item[3].map(tag=>`<span>${tag}</span>`).join("")}</div></article></div>`).join("");
 document.querySelectorAll(".tech-tab").forEach(button=>{
  const active=button.dataset.tech===category;
  button.classList.toggle("active",active);
  button.setAttribute("aria-selected",String(active));
  button.tabIndex=active?0:-1;
 });
}
document.querySelectorAll(".tech-tab").forEach(button=>button.addEventListener("click",()=>showTechnology(button.dataset.tech)));
showTechnology("frontend");
document.getElementById("consultForm").addEventListener("submit",event=>{event.preventDefault();document.getElementById("formFeedback").textContent="Thank you! Your details have been received in this demo.";event.target.reset()});
document.querySelectorAll(".navbar-nav .nav-link").forEach(link=>link.addEventListener("click",()=>{const nav=document.getElementById("mainNav");if(nav.classList.contains("show"))bootstrap.Collapse.getOrCreateInstance(nav).hide()}));
