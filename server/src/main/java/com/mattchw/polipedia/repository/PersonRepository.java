package com.mattchw.polipedia.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mattchw.polipedia.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long>{
	
	@Query("SELECT p FROM Person p WHERE p.stance IN (:stances)")
	Page<Person> findByStance(@Param("stances")List<Integer> stances, Pageable pageable);
	
	@Query("SELECT DISTINCT p from Person p LEFT JOIN PersonOccupation o ON (p.id = o.personId) WHERE (((:keyword) IS NULL OR lower(p.name) LIKE %:keyword%) AND ((:stance) IS NULL OR p.stance IN (:stance)) AND ((:option) IS NULL OR o.value IN (:option)))")
	Page<Person> findByStanceAndOccupation(@Param("keyword")String keyword, @Param("stance")List<Integer> stances, @Param("option")List<Integer> options, Pageable pageable);
}
