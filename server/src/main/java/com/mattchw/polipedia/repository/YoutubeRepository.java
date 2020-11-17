package com.mattchw.polipedia.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mattchw.polipedia.model.Youtube;

public interface YoutubeRepository extends JpaRepository<Youtube, Long>{
	@Query("SELECT DISTINCT y from Youtube y LEFT JOIN YoutubeCategory c ON (y.id = c.youtubeId) WHERE (((:keyword) IS NULL OR lower(y.name) LIKE %:keyword%) AND ((:stance) IS NULL OR y.stance IN (:stance)) AND ((:option) IS NULL OR c.value IN (:option)))")
	Page<Youtube> findByStanceAndCategory(@Param("keyword")String keyword, @Param("stance")List<Integer> stances, @Param("option")List<Integer> options, Pageable pageable);
}
