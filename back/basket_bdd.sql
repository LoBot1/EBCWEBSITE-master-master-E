-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 02 Mai 2023 à 19:09
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `basket_bdd`
--
CREATE DATABASE IF NOT EXISTS `basket_bdd` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `basket_bdd`;

-- --------------------------------------------------------

--
-- Structure de la table `bag`
--

CREATE TABLE IF NOT EXISTS `bag` (
`id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `reservation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `coach_profile`
--

CREATE TABLE IF NOT EXISTS `coach_profile` (
`id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `coach_name` varchar(100) NOT NULL,
  `desc` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `condition`
--

CREATE TABLE IF NOT EXISTS `condition` (
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `desc` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
`id` int(11) NOT NULL,
  `img` varchar(1000) NOT NULL,
  `desc` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE IF NOT EXISTS `reservation` (
`id` int(11) NOT NULL,
  `coach_name` varchar(200) NOT NULL,
  `place` varchar(100) NOT NULL,
  `start_date` varchar(500) NOT NULL,
  `finish_date` varchar(500) NOT NULL,
  `category` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `desc` varchar(5000) NOT NULL,
  `desc2` varchar(5000) NOT NULL,
  `avaible` tinyint(1) NOT NULL DEFAULT '1',
  `mainImage` varchar(2000) NOT NULL,
  `image1` varchar(2000) NOT NULL,
  `image2` varchar(2000) NOT NULL,
  `image3` varchar(2000) NOT NULL,
  `video` varchar(2000) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `postal_code` varchar(10) DEFAULT NULL,
  `adress` varchar(200) DEFAULT NULL,
  `apartment` varchar(20) DEFAULT NULL,
  `banking_information` varchar(200) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `coach` tinyint(1) NOT NULL DEFAULT '0',
  `reservation` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `user_resa`
--

CREATE TABLE IF NOT EXISTS `user_resa` (
`id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `reservation_id` int(11) NOT NULL,
  `registered_first_name` varchar(100) NOT NULL,
  `registered_last_name` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `licence` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `urgency_number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `bag`
--
ALTER TABLE `bag`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `user_id` (`user_id`,`reservation_id`) USING BTREE;

--
-- Index pour la table `coach_profile`
--
ALTER TABLE `coach_profile`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `condition`
--
ALTER TABLE `condition`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_resa`
--
ALTER TABLE `user_resa`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `user_id` (`user_id`,`reservation_id`) USING BTREE;

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `bag`
--
ALTER TABLE `bag`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `coach_profile`
--
ALTER TABLE `coach_profile`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `condition`
--
ALTER TABLE `condition`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `user_resa`
--
ALTER TABLE `user_resa`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
