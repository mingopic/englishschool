
package com.englishSchool.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/login")
						.allowedOrigins("http://localhost:4200","http://192.168.100.158:4200")
						.allowedMethods("*")
						.allowCredentials(true)
						.exposedHeaders("*");
				
				registry.addMapping("/api/**")
						.allowedOrigins("*")
						.allowedMethods("*")
						.exposedHeaders("*");
			}
		};
	}
}
