<script>
document.addEventListener("DOMContentLoaded", function () {

  // Função para aplicar comportamento de "somente 1 aba"
  function ativarSistema(tabsetClass) {
    const tabsets = document.querySelectorAll(tabsetClass);

    tabsets.forEach(tabset => {
      const links = tabset.querySelectorAll("a[data-toggle='tab']");
      
      links.forEach(link => {
        link.addEventListener("click", function () {

          // Oculta todas as abas do mesmo grupo
          links.forEach(other => {
            const id = other.getAttribute("href");
            if (!id) return;
            const content = document.querySelector(id);
            if (content) content.style.display = "none";
          });

          // Mostra a aba clicada
          const activeID = link.getAttribute("href");
          const activeContent = document.querySelector(activeID);
          if (activeContent) activeContent.style.display = "block";

        });
      });

      // Ao carregar página → mostrar apenas primeira aba
      const first = links[0];
      links.forEach((lnk, i) => {
        const id = lnk.getAttribute("href");
        const content = document.querySelector(id);
        if (!content) return;
        content.style.display = i === 0 ? "block" : "none";
      });
    });
  }

  // Ativar tanto abas principais quanto sub-abas internas
  ativarSistema(".tabset");
  ativarSistema(".tabset .tabset");

});

</script>
