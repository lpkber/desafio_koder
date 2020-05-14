<?php

namespace App\Http\Controllers;

use App\Cliente;
use App\Http\Resources\ClienteResources;
use Facade\FlareClient\Http\Client;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function getAll()
    {
        
        return ClienteResources::collection(Cliente::all());
        
    }
    public function store(Request $request)
    {
        
        $cliente = new Cliente();
        $cliente->nome = $request->nome;
        $cliente->email = $request->email;
        $cliente->telefone = $request->telefone;
        $cliente->save();
       return new ClienteResources($cliente);
    }
    public function edit(Request $request,$id)
    {
        $cliente = Cliente::find($id);
        $cliente->nome = $request->nome;
        $cliente->email = $request->email;
        $cliente->telefone = $request->telefone;
        $cliente->save();
        return new ClienteResources($cliente);
    }
    public function delete($id)
    {
        $cliente = Cliente::find($id);
        $cliente->delete();
        return "Deletado";
    }
}
