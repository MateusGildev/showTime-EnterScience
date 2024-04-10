package com.projeto.EnterScience.service;

import com.projeto.EnterScience.model.Artist;
import com.projeto.EnterScience.model.Contract;
import com.projeto.EnterScience.repository.ArtistRepository;
import com.projeto.EnterScience.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ContractService {
    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    ContractRepository contractRepository;

    public Contract createContract(Contract contract, Integer artistId) {
        Optional<Artist> optionalArtist = artistRepository.findArtistById(artistId);

        Artist artist = optionalArtist.get();

        contract.setArtist(artist);
        contract.setUsername(contract.getUsername());
        contract.setLocalDate(contract.getLocalDate());
        contract.setPrice(contract.getPrice());

        Contract savedContract = contractRepository.save(contract);
        return savedContract;
    }

    public List<Contract> findAllContracts() {
        return contractRepository.findAll();
    }

    public Optional<Contract> findById(Integer id){
        return contractRepository.findById(Long.valueOf(id));
    }
}
