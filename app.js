const express = require("express");
const produto = require("./models/produto"); 
const app = express();

app.use(express.json());

//Cadastrando produto

app.post("produto", async (req, res) =>{
const {name, preco , categoria} = req.body;

await produto.create(req.body).then(()=>{
return res.json({
erro: false,
mensagem: "produto cadastrado com sucesso"
});
}).catch(()=>{
return res.status(400).json({
erro: true,
mensagem: "Erro: Produto não cadastrado" 
});
});
});

//Selecionando todos os produtos

app.get("/produto", async (req, res) =>{

await produto.findAll().then((produtos)=>{

return res.json({
erro: false,
produtos 
});
}).catch(()=>{

return res.status(400).json({
erro: true,
mensagem: "Erro: nenhum produto encontrado" 
});
});
});

//Buscando por id

app.get("/produto/:id", async (req,res)=>{
const {id} = req.params;

await produto.findByPk(id).then((produto)=>{
return res.json({
erro: false,
produto
});
}).catch(()=>{
return res.status(400).json({
erro: true,
mensagem: "Erro: nenhum produto encontrado",
});
});
});

//Atualizando

app.put("produto", async (req,res)=>{
const {id} = req.body;

await produto.update(req.body, {where:{id}}).then(()=>{
return res.json({
erro: true,
mensagem: "Erro: não foi possivel editar o produto!!"
});
});
});

app.delete("/produto/:id", async (req,res)=>{
const {id} = req.params;

await produto.destroy({ where: {id}}).then(()=>{
return res.json({
erro: false,
mensagem: "Produto deletado com sucesso"
});
}).catch(()=>{
return res.status(400).json({
erro: true,
mensagem: "Erro: Não foi possível apagar o produto" 
});
});
});

app.listen(8080, ()=>{
"Servidor iniciado"
});