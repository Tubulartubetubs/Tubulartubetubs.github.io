function render_header(image, name, profession, content){
    //containers
    var imageDiv = document.createElement("div");
    var headerDiv = document.createElement("div");

    //content
    var imageContent = document.createElement("img");
    var nameContent = document.createElement("h1");
    var professionContent = document.createElement("h2");
    var aboutContent = document.createElement("p");

    imageDiv.className = "imgSource";
    headerDiv.className = "headers";
    
    nameContent.className = "name";
    professionContent.className = "profession";
    aboutContent.className = "content";

    imageContent.setAttribute("src", image);
    imageContent.setAttribute("alt", "BioPic");

    nameContent.innerHTML = name;
    professionContent.innerHTML = profession;
    aboutContent.innerHTML = content;

    imageDiv.appendChild(imageContent);
    headerDiv.appendChild(nameContent);
    headerDiv.appendChild(professionContent);
    headerDiv.appendChild(aboutContent);

    document.getElementById("headerContainer").appendChild(imageDiv);
    document.getElementById("headerContainer").appendChild(headerDiv);
}

function render_education(image, name, course, yearStart, yearEnd){
    //containers
    var educationContainerDiv = document.createElement("div");
    var educationImageDiv = document.createElement("div");

    //content
    var educationImageContent = document.createElement("img");
    var educationContent = document.createElement("h2");
    var educationContentString = name + " || " + course + " || " + yearStart + "-" + yearEnd;

    educationContainerDiv.className = "education container";
    educationImageDiv.className = "education image";
    educationContent.className = "education title";

    educationImageContent.setAttribute("src", image);
    educationContent.innerHTML = educationContentString;

    educationImageDiv.appendChild(educationImageContent);
    educationContainerDiv.appendChild(educationImageDiv);
    educationContainerDiv.appendChild(educationContent);

    document.getElementById("Education").appendChild(educationContainerDiv);
}

function render_organizations(image, title, yearStart){
    //containers
    var orgContainerDiv = document.createElement("div");
    var orgImageDiv = document.createElement("div");

    //content
    var orgImageContent = document.createElement("img");
    var orgContent = document.createElement("h2");
    var orgContentString = title + " || Since " + yearStart;

    orgContainerDiv.className = "organizations container";
    orgImageDiv.className = "organizations image";
    orgContent.className = "organizations title";

    orgImageContent.setAttribute("src", image);
    orgContent.innerHTML = orgContentString;

    orgImageDiv.appendChild(orgImageContent);
    orgContainerDiv.appendChild(orgImageDiv);
    orgContainerDiv.appendChild(orgContent);

    document.getElementById("Organizations").appendChild(orgContainerDiv);
}

function render_works(image){
    var worksImageDiv = document.createElement("div");
    worksImageDiv.className= "works container image";
    var worksImageContent = document.createElement("img");
    worksImageContent.setAttribute("src", image);
    worksImageDiv.appendChild(worksImageContent);
    document.getElementById("Works").appendChild(worksImageDiv);
}

function render_skills(image,title,level,yearStart){
    //containers
    var skillsContainerDiv = document.createElement("div");
    var skillsImageDiv = document.createElement("div");

    //content
    var skillsImageContent = document.createElement("img");
    var skillsContent = document.createElement("h2");
    var skillsContentString = title + " || " + level + " || Since " + yearStart;

    skillsContainerDiv.className = "skills container";
    skillsImageDiv.className = "skills image";
    skillsContent.className = "skills title";

    skillsImageContent.setAttribute("src", image);
    skillsContent.innerHTML = skillsContentString;

    skillsImageDiv.appendChild(skillsImageContent);
    skillsContainerDiv.appendChild(skillsImageDiv);
    skillsContainerDiv.appendChild(skillsContent);

    document.getElementById("Skills").appendChild(skillsContainerDiv);
}

function render_experience(image, job, title, yearStart, yearEnd, list){
    //containers
    var experienceContainerDiv = document.createElement("div");
    var experienceImageDiv = document.createElement("div");
    var experienceUnorderedList = document.createElement("ul");

    //content
    var experienceImageContent = document.createElement("img");
    var experienceJobContent = document.createElement("h2");
    var experienceTitleContent = document.createElement("h3");
    var experienceTitleContentString = title + " / " + yearStart + " - " + yearEnd;
    var experienceListContent;

    experienceContainerDiv.className = "experience container";
    experienceImageContent.className = "experience image";
    experienceJobContent.className = "experience job";
    experienceTitleContent.className = "experience title";
    experienceUnorderedList.className = "experience list";

    experienceImageContent.setAttribute("src", image);
    experienceJobContent.innerHTML = job;
    experienceTitleContent.innerHTML = experienceTitleContentString;
    // experienceListContent.innerHTML = list[0];

    experienceImageDiv.appendChild(experienceImageContent);
    for(let i=0;i<list.length; i++){
        experienceListContent = document.createElement("li");
        experienceListContent.innerHTML = list[i];
        experienceUnorderedList.appendChild(experienceListContent);
    }
    experienceUnorderedList.appendChild(experienceListContent);
    
    experienceContainerDiv.appendChild(experienceImageDiv);
    experienceContainerDiv.appendChild(experienceJobContent);
    experienceContainerDiv.appendChild(experienceTitleContent);
    experienceContainerDiv.appendChild(experienceUnorderedList);

    document.getElementById("experiences").appendChild(experienceContainerDiv);
}

function render_links(link, image){
    var linkContent = document.createElement("a");
    var imageContent = document.createElement("img");

    linkContent.setAttribute("href", link);
    imageContent.setAttribute("src", image);
    imageContent.className = "pic";

    linkContent.appendChild(imageContent);

    document.getElementById("otherLinks").appendChild(linkContent);
}