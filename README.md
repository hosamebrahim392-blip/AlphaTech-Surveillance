const cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const panel = document.getElementById("cartPanel");
  const list = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cartCount");

  if (!list || !panel || !totalEl || !countEl) return;

  if (cart.length === 0) {
    list.innerHTML = "<div style='color:var(--muted);padding:8px 0;'>لا توجد عناصر في السلة حالياً.</div>";
    panel.classList.remove("show");
    countEl.textContent = "0 عنصر";
    totalEl.textContent = "0 EGP";
    return;
  }

  panel.classList.add("show");
  list.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <small>${item.price} EGP</small>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${index})">حذف</button>
    `;
    list.appendChild(row);
  });

  countEl.textContent = `${cart.length} عنصر${cart.length > 1 ? "ات" : ""}`;
  totalEl.textContent = `${total} EGP`;
}

function submitOrder() {
  if (cart.length === 0) {
    alert("السلة فارغة، أضف خدمة أولاً.");
    return;
  }

  const summary = cart.map(item => `- ${item.name}: ${item.price} EGP`).join("\n");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const message = encodeURIComponent(
    "السلام عليكم، أود إرسال طلب شراء:\n\n" +
    summary +
    "\n\nالإجمالي: " + total + " EGP"
  );

  window.open("https://wa.me/201121275069?text=" + message, "_blank");
}

// Smooth scroll for anchor links
Array.from(document.querySelectorAll('a[href^="#"]')).forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
