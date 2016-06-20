-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-05-2016 a las 17:26:35
-- Versión del servidor: 5.6.26
-- Versión de PHP: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `contentos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avatares`
--

CREATE TABLE IF NOT EXISTS `avatares` (
  `id_avatar` int(11) NOT NULL,
  `img_src` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE IF NOT EXISTS `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE IF NOT EXISTS `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `texto` text COLLATE utf8_unicode_ci NOT NULL,
  `usuario` int(11),
  `fecha` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentos`
--

CREATE TABLE IF NOT EXISTS `cuentos` (
  `id_cuento` int(11) NOT NULL,
  `titulo` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `juego` int(11) NOT NULL,
  `creador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `donaciones`
--

CREATE TABLE IF NOT EXISTS `donaciones` (
  `id_donacion` int(11) NOT NULL,
  `usuario` int(11) NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `cantidad` double NOT NULL,
  `fecha` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE IF NOT EXISTS `imagenes` (
  `id_img` int(11) NOT NULL,
  `img_src` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `zona_pag` int(11) NOT NULL,
  `pagina` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE IF NOT EXISTS `juegos` (
  `id_juego` int(11) NOT NULL,
  `js_src` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagina`
--

CREATE TABLE IF NOT EXISTS `pagina` (
  `id_pagina` int(11) NOT NULL,
  `texto` text COLLATE utf8_unicode_ci NOT NULL,
  `cuento` int(11) NOT NULL,
  `numero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE IF NOT EXISTS `rol` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sonido`
--

CREATE TABLE IF NOT EXISTS `sonido` (
  `id_sonido` int(11) NOT NULL,
  `sonido_src` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `pagina` int(11) NOT NULL,
  `orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nickname` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `apellidos` varchar(220) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci,
  `password` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` char(9) COLLATE utf8_unicode_ci,
  `nif` char(9) COLLATE utf8_unicode_ci,
  `rol` int(11) NOT NULL DEFAULT 1,
  `padre` int(11),
  `avatar` int(11)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracion`
--

CREATE TABLE IF NOT EXISTS `valoracion` (
  `id_valoracion` int(11) NOT NULL,
  `cuento` int(11) NOT NULL,
  `nota` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `fecha` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `avatares`
--
ALTER TABLE `avatares`
  ADD PRIMARY KEY (`id_avatar`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `usuario` (`usuario`);

--
-- Indices de la tabla `cuentos`
--
ALTER TABLE `cuentos`
  ADD PRIMARY KEY (`id_cuento`),
  ADD KEY `creador` (`creador`),
  ADD KEY `juego` (`juego`),
  ADD KEY `categoria` (`categoria`);

--
-- Indices de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD PRIMARY KEY (`id_donacion`),
  ADD KEY `usuario` (`usuario`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id_img`),
  ADD KEY `pagina` (`pagina`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id_juego`);

--
-- Indices de la tabla `pagina`
--
ALTER TABLE `pagina`
  ADD PRIMARY KEY (`id_pagina`),
  ADD KEY `cuento` (`cuento`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `sonido`
--
ALTER TABLE `sonido`
  ADD PRIMARY KEY (`id_sonido`),
  ADD KEY `pagina` (`pagina`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `avatar` (`avatar`),
  ADD KEY `padre` (`padre`),
  ADD KEY `rol` (`rol`);

--
-- Indices de la tabla `valoracion`
--
ALTER TABLE `valoracion`
  ADD PRIMARY KEY (`id_valoracion`),
  ADD KEY `user` (`user`),
  ADD KEY `cuento` (`cuento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `avatares`
--
ALTER TABLE `avatares`
  MODIFY `id_avatar` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `cuentos`
--
ALTER TABLE `cuentos`
  MODIFY `id_cuento` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  MODIFY `id_donacion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id_img` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `id_juego` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pagina`
--
ALTER TABLE `pagina`
  MODIFY `id_pagina` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `sonido`
--
ALTER TABLE `sonido`
  MODIFY `id_sonido` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `valoracion`
--
ALTER TABLE `valoracion`
  MODIFY `id_valoracion` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cuentos`
--
ALTER TABLE `cuentos`
  ADD CONSTRAINT `cuentos_ibfk_1` FOREIGN KEY (`juego`) REFERENCES `juegos` (`id_juego`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cuentos_ibfk_2` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cuentos_ibfk_3` FOREIGN KEY (`creador`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD CONSTRAINT `donaciones_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`pagina`) REFERENCES `pagina` (`id_pagina`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pagina`
--
ALTER TABLE `pagina`
  ADD CONSTRAINT `pagina_ibfk_1` FOREIGN KEY (`cuento`) REFERENCES `cuentos` (`id_cuento`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sonido`
--
ALTER TABLE `sonido`
  ADD CONSTRAINT `sonido_ibfk_1` FOREIGN KEY (`pagina`) REFERENCES `pagina` (`id_pagina`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`avatar`) REFERENCES `avatares` (`id_avatar`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`rol`) REFERENCES `rol` (`id_rol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarios_ibfk_3` FOREIGN KEY (`padre`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `valoracion`
--
ALTER TABLE `valoracion`
  ADD CONSTRAINT `valoracion_ibfk_1` FOREIGN KEY (`cuento`) REFERENCES `cuentos` (`id_cuento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `valoracion_ibfk_2` FOREIGN KEY (`user`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
