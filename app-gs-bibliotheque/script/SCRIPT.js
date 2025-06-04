document.addEventListener("DOMContentLoaded", () => {

    const loginLink = document.getElementById("loginLink");
    const loginSection = document.getElementById("loginSection");
    if (loginLink && loginSection) {
      loginLink.addEventListener("click", function (e) {
        e.preventDefault();
        loginSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  
    const searchInput = document.querySelector(".search");
    const searchButton = document.querySelector(".btn-search");
  
    if (searchInput && searchButton) {
      searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) return;
  
        const allTitles = document.querySelectorAll("h4");
        let found = false;
  
        allTitles.forEach((title) => {
          if (title.textContent.toLowerCase().includes(searchTerm)) {
            title.scrollIntoView({ behavior: "smooth", block: "center" });
            title.classList.add("highlight-book");
  
            setTimeout(() => {
              title.classList.remove("highlight-book");
            }, 2000);
  
            found = true;
          }
        });
  
        if (!found) {
          alert("📚 Aucun livre trouvé avec ce titre.");
        }
      });
    }
  
    const buyButtons = document.querySelectorAll(".buy-btn");
    if (buyButtons.length > 0) {
      buyButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const toast = document.createElement("div");
          toast.className = "toast";
          toast.textContent = "✅ Livre ajouté au panier";
          document.body.appendChild(toast);
  
          setTimeout(() => toast.classList.add("visible"), 100);
          setTimeout(() => {
            toast.classList.remove("visible");
            setTimeout(() => toast.remove(), 300);
          }, 2500);
        });
      });
    }
  
    
    if (window.location.pathname.includes("penalite.html")) {
      alert("📢 Bienvenue sur la page des pénalités de la Bibliothèque !");
    }
  });
const form = document.getElementById('adherent-form');
const formSection = document.getElementById('form-section');
const showFormBtn = document.getElementById('show-form-btn');
const tableSection = document.getElementById('table-section');
const tableBody = document.getElementById('adherent-table-body');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nom = document.getElementById('nom').value.trim();
  const prenom = document.getElementById('prenom').value.trim();
  const email = document.getElementById('email').value.trim();
  const tel = document.getElementById('tel').value.trim();

  if (nom && prenom && email && tel) {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${nom}</td>
      <td>${prenom}</td>
      <td>${email}</td>
      <td>${tel}</td>
      <td>
        <button class="edit-btn">Modifier</button>
        <button class="delete-btn">Supprimer</button>
      </td>
    `;

    tableBody.appendChild(row);

    tableSection.style.display = 'block';
    formSection.style.display = 'none';
    showFormBtn.style.display = 'inline-block';

    form.reset();
  }
});

showFormBtn.addEventListener('click', function() {
  formSection.style.display = 'block';
  showFormBtn.style.display = 'none';
});

tableBody.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('tr').remove();
  }

  if (e.target.classList.contains('edit-btn')) {
    const row = e.target.closest('tr');
    const nom = row.children[0].textContent;
    const prenom = row.children[1].textContent;
    const email = row.children[2].textContent;
    const tel = row.children[3].textContent;
    document.getElementById('nom').value = nom;
    document.getElementById('prenom').value = prenom;
    document.getElementById('email').value = email;
    document.getElementById('tel').value = tel;
    row.remove();
    formSection.style.display = 'block';
    showFormBtn.style.display = 'none';
  }
});
  