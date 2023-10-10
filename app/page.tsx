import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>Formulário</h1>
      <form action="/enviar" method="post">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="mensagem">Mensagem:</label><br>
        <textarea id="mensagem" name="mensagem" rows="4" cols="50" required></textarea><br><br>

        <input type="submit" value="Enviar">
      </form>
    </main>
  )
}
