<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ClienteResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            "id" => $this->id,
            "nome" => $this->nome,
            "email" => $this->email,
            "telefone" => $this->telefone,
            "Data de criacao" => Carbon::parse($this->created_at)->format("d-m-Y")
        ];
    }
}
