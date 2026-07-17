async function test() {
  const res = await fetch('http://localhost/backend/api/login.php');
  console.log(await res.text());
}
test();
