const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );

  const data = await response.json();
  const tabContainer = document.getElementById("tab-container");

  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
         <a onclick="handleLoadInfos('${category.category_id}')" class="tab">${category.category}</a>
        `;
        tabContainer.appendChild(div);
  });
  //console.log(data.data);
};

const handleLoadInfos = async(categortId) =>{
    const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categortId}`
  );
  const data = await response.json();
  console.log(data);
}
handleCategory();
