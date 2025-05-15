package com.english_school.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class TokenUtils {

    private final static String ACCESS_TOKEN_SECRET = "NX5ABhajCPZJJZH0g6jxpJkAGVX2hOQD";
    private final static Long ACCESS_TOKEN_VALIDITY_SECONDS = Long.valueOf(15000);

    public static String CreateToken(Long userId, String name, String userName) {
        long expirationTime = ACCESS_TOKEN_VALIDITY_SECONDS * 1000;
        Date expirationDate = new Date(System.currentTimeMillis() + expirationTime);

        Map<String, Object> extra = new HashMap<>();
        extra.put("userId", userId);
        extra.put("name", name);

        return Jwts.builder()
                .setSubject(userName)
                .setExpiration(expirationDate)
                .addClaims(extra)
                .signWith(Keys.hmacShaKeyFor(ACCESS_TOKEN_SECRET.getBytes()))
                .compact();
    }

    public static UsernamePasswordAuthenticationToken GetAuthentication(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(ACCESS_TOKEN_SECRET.getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            String userName = claims.getSubject();

            return new UsernamePasswordAuthenticationToken(userName, null, Collections.emptyList());
        } catch (JwtException e) {
            return null;
        }
    }
}
