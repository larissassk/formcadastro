function Verificar() {
  let nome = document.getElementById('nome').value;
  let telefone = document.getElementById('telefone').value;
  let nascimento = document.getElementById('nascimento').value;
  let cpf = document.getElementById('cpf').value;
  let endereco = document.getElementById('endereco').value;
  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;
  let csenha = document.getElementById('csenha').value;
  let sobrenome = document.getElementById('csenha').value;
  let numero = document.getElementById('numero').value;
  let cidade = document.getElementById('cidade').value;
  let complemento = document.getElementById('complemento').value;
  let bairro = document.getElementById('bairro').value;
  let cep = document.getElementById('cep').value;
  let rua = document.getElementById('rua').value;


    if(!email || !nome || !telefone || !cpf || !cep || !bairro || !rua || !nascimento || !endereco || ! senha || !csenha || !sobrenome || !numero || !cidade || !complemento){
      alert("Campo de preenchimento obrigatório");
    }
    else {
      alert ("Campos preenchidos com sucesso")
    }
  }
  