function buyNow(name, price){
  let msg = 
`🎮 Order Request:
Game: ${name}
Price: ${price} EGP

📩 Contact us to complete purchase:
Discord: https://discord.gg/wdpqbynFr
Facebook: https://www.facebook.com/share/1AkukwFmxJ/`;

  // يفتح نافذة فيها البيانات
  alert(msg);

  // كمان يفتح ديسكورد مباشرة
  window.open("https://discord.gg/wdpqbynFr", "_blank");
}
