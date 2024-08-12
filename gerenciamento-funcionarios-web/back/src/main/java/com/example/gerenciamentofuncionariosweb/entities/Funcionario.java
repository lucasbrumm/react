package com.example.gerenciamentofuncionariosweb.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "funcionario")
@Data
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nome_funcionario")
    private String nomeFuncionario;

    @Column(name = "funcao")
    private String funcao;

    @Column(name = "habilidades")
    private String habilidades;

    @Column(name = "preferencias")
    private String preferencias;

    @Column(name = "data_cadastro")
    @Temporal(TemporalType.DATE)
    private LocalDate data;
}
