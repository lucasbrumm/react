package com.example.gerenciamentofuncionariosweb.controller;


import com.example.gerenciamentofuncionariosweb.entities.Funcionario;
import com.example.gerenciamentofuncionariosweb.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/funcionario")
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    @GetMapping("/")
    public ResponseEntity<Page<Funcionario>> buscarTodos(Pageable pagination) {
        Page<Funcionario> fun = funcionarioService.buscarTodos(pagination);
        return new ResponseEntity<>(fun, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> buscarPorId(@PathVariable(value = "id") Long id) {
        Optional<Funcionario> fun = funcionarioService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(fun.get());
    }

    @PostMapping("/page")
    public ResponseEntity<Page<Funcionario>> buscarPorPagina(@RequestBody PaginaRequest paginaRequest) {
        int numeroPagina = paginaRequest.getNumeroPagina();
        int tamanhoPagina = paginaRequest.getTamanhoPagina();
        if (tamanhoPagina <= 0) {
            tamanhoPagina = Integer.MAX_VALUE;
        }
        Pageable pagination = PageRequest.of(numeroPagina, tamanhoPagina);
        Page<Funcionario> fun = funcionarioService.buscarTodos(pagination);
        return new ResponseEntity<>(fun, HttpStatus.OK);
    }

    @PostMapping("/")
    public Funcionario inserir(@RequestBody Funcionario funcionario) {
        return funcionarioService.inserir(funcionario);
    }

    @PutMapping("/")
    public Funcionario alterar(@RequestBody Funcionario funcionario) {
        return funcionarioService.alterar(funcionario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable(value = "id") Long id) {
        funcionarioService.excluir(id);
        return ResponseEntity.ok().build();
    }
}
