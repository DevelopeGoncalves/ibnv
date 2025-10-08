document.addEventListener("DOMContentLoaded", function() {
  const players = document.querySelectorAll(".instagram-reel-player");

  players.forEach(player => {
    player.addEventListener("click", function() {
      const postId = player.getAttribute("data-instagram-id");
      const blockquote = document.createElement("blockquote");
      blockquote.className = "instagram-media";
      blockquote.setAttribute("data-instgrm-captioned", "");
      blockquote.setAttribute("data-instgrm-permalink", `https://www.instagram.com/reel/${postId}/?utm_source=ig_embed&utm_campaign=loading`);
      blockquote.setAttribute("data-instgrm-version", "14");
      
      const a = document.createElement("a");
      a.href = `https://www.instagram.com/reel/${postId}/?utm_source=ig_embed&utm_campaign=loading`;
      a.target = "_blank";
      a.textContent = "Ver no Instagram";

      blockquote.appendChild(a);

      player.innerHTML = "";
      player.appendChild(blockquote);
      
      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);
      
      // Ajusta o estilo para o bloco do Instagram
      blockquote.style.background = "#FFF";
      blockquote.style.border = "0";
      blockquote.style.borderRadius = "3px";
      blockquote.style.boxShadow = "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)";
      blockquote.style.margin = "1px";
      blockquote.style.maxWidth = "540px";
      blockquote.style.minWidth = "326px";
      blockquote.style.padding = "0";
      blockquote.style.width = "99.375%";

      // Opcional: Remova o event listener para evitar cliques repetidos
      player.removeEventListener("click", this);
    }, { once: true });
  });
});