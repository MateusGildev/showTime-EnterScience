package com.projeto.EnterScience.repository;

import com.projeto.EnterScience.model.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractRepository extends JpaRepository<Contract,Long> {

    Contract save(Contract contract);
}
