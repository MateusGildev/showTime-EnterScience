package com.projeto.EnterScience.controller;

import com.projeto.EnterScience.model.Contract;
import com.projeto.EnterScience.repository.ArtistRepository;
import com.projeto.EnterScience.repository.ContractRepository;
import com.projeto.EnterScience.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contract")
public class ContractController {

    @Autowired
    ContractRepository contractRepository;
    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    ContractService contractService;

    @PostMapping("/new/{artistId}")
    public ResponseEntity<Contract> createContract(@RequestBody Contract contract,@PathVariable Integer artistId) {
        return ResponseEntity.ok(contractService.createContract(contract,artistId));
    }

    @GetMapping(value = "/all")
    public List<Contract> findAllContracts(){
        return contractService.findAllContracts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Contract>> findById(@PathVariable Integer id){
        return ResponseEntity.ok(contractService.findById(id));
    }

}
