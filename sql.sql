-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 14, 2020 at 10:33 AM
-- Server version: 10.2.32-MariaDB-log-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `openfoxx_appmultivendor`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_address`
--

CREATE TABLE `supermart_address` (
  `address_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL,
  `company` varchar(40) NOT NULL,
  `address_1` varchar(128) NOT NULL,
  `address_2` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `postcode` varchar(10) NOT NULL,
  `country_id` int(11) NOT NULL DEFAULT 0,
  `zone_id` int(11) NOT NULL DEFAULT 0,
  `custom_field` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_address`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_api`
--

CREATE TABLE `supermart_api` (
  `api_id` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `key` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_api_ip`
--

CREATE TABLE `supermart_api_ip` (
  `api_ip_id` int(11) NOT NULL,
  `api_id` int(11) NOT NULL,
  `ip` varchar(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_api_ip`
-- --------------------------------------------------------

--
-- Table structure for table `supermart_api_session`
--

CREATE TABLE `supermart_api_session` (
  `api_session_id` int(11) NOT NULL,
  `api_id` int(11) NOT NULL,
  `session_id` varchar(32) NOT NULL,
  `ip` varchar(40) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_api_session`
--


--
-- Table structure for table `supermart_attribute`
--

CREATE TABLE `supermart_attribute` (
  `attribute_id` int(11) NOT NULL,
  `attribute_group_id` int(11) NOT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_attribute`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_attribute_description`
--

CREATE TABLE `supermart_attribute_description` (
  `attribute_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_attribute_description`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_attribute_group`
--

CREATE TABLE `supermart_attribute_group` (
  `attribute_group_id` int(11) NOT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_attribute_group`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_attribute_group_description`
--

CREATE TABLE `supermart_attribute_group_description` (
  `attribute_group_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_attribute_group_description`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_banner`
--

CREATE TABLE `supermart_banner` (
  `banner_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_banner`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_banner_image`
--

CREATE TABLE `supermart_banner_image` (
  `banner_image_id` int(11) NOT NULL,
  `banner_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `link` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `sort_order` int(3) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_banner_image`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_cart`
--

CREATE TABLE `supermart_cart` (
  `cart_id` int(11) UNSIGNED NOT NULL,
  `api_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `session_id` varchar(32) NOT NULL,
  `product_id` int(11) NOT NULL,
  `recurring_id` int(11) NOT NULL,
  `option` text NOT NULL,
  `quantity` int(5) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_cart`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_category`
--

CREATE TABLE `supermart_category` (
  `category_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `top` tinyint(1) NOT NULL,
  `column` int(3) NOT NULL,
  `sort_order` int(3) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_category`
--



-- --------------------------------------------------------

--
-- Table structure for table `supermart_category_description`
--

CREATE TABLE `supermart_category_description` (
  `category_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_description` varchar(255) NOT NULL,
  `meta_keyword` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_category_description`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_category_filter`
--

CREATE TABLE `supermart_category_filter` (
  `category_id` int(11) NOT NULL,
  `filter_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_category_filter`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_category_path`
--

CREATE TABLE `supermart_category_path` (
  `category_id` int(11) NOT NULL,
  `path_id` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_category_path`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_category_to_layout`
--

CREATE TABLE `supermart_category_to_layout` (
  `category_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `layout_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_category_to_layout`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_category_to_store`
--

CREATE TABLE `supermart_category_to_store` (
  `category_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_category_to_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_country`
--

CREATE TABLE `supermart_country` (
  `country_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `iso_code_2` varchar(2) NOT NULL,
  `iso_code_3` varchar(3) NOT NULL,
  `address_format` text NOT NULL,
  `postcode_required` tinyint(1) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_country`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_coupon`
--

CREATE TABLE `supermart_coupon` (
  `coupon_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `code` varchar(20) NOT NULL,
  `type` char(1) NOT NULL,
  `discount` decimal(15,4) NOT NULL,
  `logged` tinyint(1) NOT NULL,
  `shipping` tinyint(1) NOT NULL,
  `total` decimal(15,4) NOT NULL,
  `date_start` date NOT NULL DEFAULT '0000-00-00',
  `date_end` date NOT NULL DEFAULT '0000-00-00',
  `uses_total` int(11) NOT NULL,
  `uses_customer` varchar(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_coupon`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_coupon_category`
--

CREATE TABLE `supermart_coupon_category` (
  `coupon_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_coupon_history`
--

CREATE TABLE `supermart_coupon_history` (
  `coupon_history_id` int(11) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `amount` decimal(15,4) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_coupon_product`
--

CREATE TABLE `supermart_coupon_product` (
  `coupon_product_id` int(11) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_currency`
--

CREATE TABLE `supermart_currency` (
  `currency_id` int(11) NOT NULL,
  `title` varchar(32) NOT NULL,
  `code` varchar(3) NOT NULL,
  `symbol_left` varchar(12) NOT NULL,
  `symbol_right` varchar(12) NOT NULL,
  `decimal_place` char(1) NOT NULL,
  `value` double(15,8) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_currency`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer`
--

CREATE TABLE `supermart_customer` (
  `customer_id` int(11) NOT NULL,
  `customer_group_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL DEFAULT 0,
  `language_id` int(11) NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL,
  `email` varchar(96) NOT NULL,
  `telephone` varchar(32) NOT NULL,
  `fax` varchar(32) NOT NULL,
  `password` varchar(40) NOT NULL,
  `salt` varchar(9) NOT NULL,
  `cart` text DEFAULT NULL,
  `wishlist` text DEFAULT NULL,
  `newsletter` tinyint(1) NOT NULL DEFAULT 0,
  `address_id` int(11) NOT NULL DEFAULT 0,
  `custom_field` text NOT NULL,
  `ip` varchar(40) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `safe` tinyint(1) NOT NULL,
  `token` text NOT NULL,
  `code` varchar(40) NOT NULL,
  `date_added` datetime NOT NULL,
  `is_seller` tinyint(1) DEFAULT 0 COMMENT '0 for not requested, 1 for accept, 2 for deny, 3 for requested,'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_customer`
--


--
-- Table structure for table `supermart_customer_activity`
--

CREATE TABLE `supermart_customer_activity` (
  `customer_activity_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `key` varchar(64) NOT NULL,
  `data` text NOT NULL,
  `ip` varchar(40) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_affiliate`
--

CREATE TABLE `supermart_customer_affiliate` (
  `customer_id` int(11) NOT NULL,
  `company` varchar(40) NOT NULL,
  `website` varchar(255) NOT NULL,
  `tracking` varchar(64) NOT NULL,
  `commission` decimal(4,2) NOT NULL DEFAULT 0.00,
  `tax` varchar(64) NOT NULL,
  `payment` varchar(6) NOT NULL,
  `cheque` varchar(100) NOT NULL,
  `paypal` varchar(64) NOT NULL,
  `bank_name` varchar(64) NOT NULL,
  `bank_branch_number` varchar(64) NOT NULL,
  `bank_swift_code` varchar(64) NOT NULL,
  `bank_account_name` varchar(64) NOT NULL,
  `bank_account_number` varchar(64) NOT NULL,
  `custom_field` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_approval`
--

CREATE TABLE `supermart_customer_approval` (
  `customer_approval_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `type` varchar(9) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_group`
--

CREATE TABLE `supermart_customer_group` (
  `customer_group_id` int(11) NOT NULL,
  `approval` int(1) NOT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_customer_group`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_group_description`
--

CREATE TABLE `supermart_customer_group_description` (
  `customer_group_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `description` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_customer_group_description`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_history`
--

CREATE TABLE `supermart_customer_history` (
  `customer_history_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_ip`
--

CREATE TABLE `supermart_customer_ip` (
  `customer_ip_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `ip` varchar(40) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_customer_ip`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_login`
--

CREATE TABLE `supermart_customer_login` (
  `customer_login_id` int(11) NOT NULL,
  `email` varchar(96) NOT NULL,
  `ip` varchar(40) NOT NULL,
  `total` int(4) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_customer_login`
--


--
-- Table structure for table `supermart_customer_online`
--

CREATE TABLE `supermart_customer_online` (
  `ip` varchar(40) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `url` text NOT NULL,
  `referer` text NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_reward`
--

CREATE TABLE `supermart_customer_reward` (
  `customer_reward_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL DEFAULT 0,
  `order_id` int(11) NOT NULL DEFAULT 0,
  `description` text NOT NULL,
  `points` int(8) NOT NULL DEFAULT 0,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_search`
--

CREATE TABLE `supermart_customer_search` (
  `customer_search_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `keyword` varchar(255) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `sub_category` tinyint(1) NOT NULL,
  `description` tinyint(1) NOT NULL,
  `products` int(11) NOT NULL,
  `ip` varchar(40) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_transaction`
--

CREATE TABLE `supermart_customer_transaction` (
  `customer_transaction_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `amount` decimal(15,4) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_customer_wishlist`
--

CREATE TABLE `supermart_customer_wishlist` (
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_customer_wishlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_custom_field`
--

CREATE TABLE `supermart_custom_field` (
  `custom_field_id` int(11) NOT NULL,
  `type` varchar(32) NOT NULL,
  `value` text NOT NULL,
  `validation` varchar(255) NOT NULL,
  `location` varchar(10) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_custom_field_customer_group`
--

CREATE TABLE `supermart_custom_field_customer_group` (
  `custom_field_id` int(11) NOT NULL,
  `customer_group_id` int(11) NOT NULL,
  `required` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_custom_field_description`
--

CREATE TABLE `supermart_custom_field_description` (
  `custom_field_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_custom_field_value`
--

CREATE TABLE `supermart_custom_field_value` (
  `custom_field_value_id` int(11) NOT NULL,
  `custom_field_id` int(11) NOT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_custom_field_value_description`
--

CREATE TABLE `supermart_custom_field_value_description` (
  `custom_field_value_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `custom_field_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_download`
--

CREATE TABLE `supermart_download` (
  `download_id` int(11) NOT NULL,
  `filename` varchar(160) NOT NULL,
  `mask` varchar(128) NOT NULL,
  `date_added` datetime NOT NULL,
  `seller_id` int(11) DEFAULT 0 COMMENT '0 for admin'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_download`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_download_description`
--

CREATE TABLE `supermart_download_description` (
  `download_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_download_description`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_event`
--

CREATE TABLE `supermart_event` (
  `event_id` int(11) NOT NULL,
  `code` varchar(64) NOT NULL,
  `trigger` text NOT NULL,
  `action` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_event`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_extension`
--

CREATE TABLE `supermart_extension` (
  `extension_id` int(11) NOT NULL,
  `type` varchar(32) NOT NULL,
  `code` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_extension`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_extension_install`
--

CREATE TABLE `supermart_extension_install` (
  `extension_install_id` int(11) NOT NULL,
  `extension_download_id` int(11) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_extension_install`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_extension_path`
--

CREATE TABLE `supermart_extension_path` (
  `extension_path_id` int(11) NOT NULL,
  `extension_install_id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_extension_path`

-- --------------------------------------------------------

--
-- Table structure for table `supermart_filter`
--

CREATE TABLE `supermart_filter` (
  `filter_id` int(11) NOT NULL,
  `filter_group_id` int(11) NOT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_filter`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_filter_description`
--

CREATE TABLE `supermart_filter_description` (
  `filter_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `filter_group_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_filter_description`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_filter_group`
--

CREATE TABLE `supermart_filter_group` (
  `filter_group_id` int(11) NOT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_filter_group`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_filter_group_description`
--

CREATE TABLE `supermart_filter_group_description` (
  `filter_group_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_filter_group_description`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_geo_zone`
--

CREATE TABLE `supermart_geo_zone` (
  `geo_zone_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_geo_zone`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_information`
--

CREATE TABLE `supermart_information` (
  `information_id` int(11) NOT NULL,
  `bottom` int(1) NOT NULL DEFAULT 0,
  `sort_order` int(3) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_information`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_information_description`
--

CREATE TABLE `supermart_information_description` (
  `information_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `description` mediumtext NOT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_description` varchar(255) NOT NULL,
  `meta_keyword` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_information_description`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_information_to_layout`
--

CREATE TABLE `supermart_information_to_layout` (
  `information_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `layout_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_information_to_layout`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_information_to_store`
--

CREATE TABLE `supermart_information_to_store` (
  `information_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_information_to_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_language`
--

CREATE TABLE `supermart_language` (
  `language_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `code` varchar(5) NOT NULL,
  `locale` varchar(255) NOT NULL,
  `image` varchar(64) NOT NULL,
  `directory` varchar(32) NOT NULL,
  `sort_order` int(3) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_language`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_layout`
--

CREATE TABLE `supermart_layout` (
  `layout_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_layout`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_layout_module`
--

CREATE TABLE `supermart_layout_module` (
  `layout_module_id` int(11) NOT NULL,
  `layout_id` int(11) NOT NULL,
  `code` varchar(64) NOT NULL,
  `position` varchar(14) NOT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_layout_module`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_layout_route`
--

CREATE TABLE `supermart_layout_route` (
  `layout_route_id` int(11) NOT NULL,
  `layout_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `route` varchar(64) NOT NULL,
  `mobile_layout_status` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_layout_route`
--
---------------------------------------------

--
-- Table structure for table `supermart_length_class`
--

CREATE TABLE `supermart_length_class` (
  `length_class_id` int(11) NOT NULL,
  `value` decimal(15,8) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_length_class`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_length_class_description`
--

CREATE TABLE `supermart_length_class_description` (
  `length_class_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `title` varchar(32) NOT NULL,
  `unit` varchar(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_length_class_description`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_location`
--

CREATE TABLE `supermart_location` (
  `location_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `address` text NOT NULL,
  `telephone` varchar(32) NOT NULL,
  `fax` varchar(32) NOT NULL,
  `geocode` varchar(32) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `open` text NOT NULL,
  `comment` text NOT NULL,
  `video` varchar(255) NOT NULL,
  `gallery` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `country_id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_location`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_lsmultivendor_payment_done_history`
--

CREATE TABLE `supermart_lsmultivendor_payment_done_history` (
  `id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `payment_mode` varchar(50) COLLATE utf8_unicode_ci DEFAULT 'paypal',
  `transaction_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `amount` double(11,4) NOT NULL,
  `comment` text COLLATE utf8_unicode_ci NOT NULL,
  `created_date` datetime NOT NULL,
  `modified_date` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_lsm_enquiry`
--

CREATE TABLE `supermart_lsm_enquiry` (
  `enquiry_id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `c_email` varchar(500) NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  `description` text DEFAULT '',
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_lsm_enquiry_message`
--

CREATE TABLE `supermart_lsm_enquiry_message` (
  `message_id` int(11) NOT NULL,
  `enquiry_id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `message` text DEFAULT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_lsm_review`
--

CREATE TABLE `supermart_lsm_review` (
  `review_id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` text DEFAULT '',
  `rating` tinyint(1) DEFAULT 1,
  `status` tinyint(1) DEFAULT 1,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_lsm_seller`
--

CREATE TABLE `supermart_lsm_seller` (
  `seller_id` int(11) NOT NULL,
  `seller_name` varchar(200) NOT NULL,
  `store_name` varchar(200) NOT NULL,
  `store_email` varchar(200) NOT NULL,
  `store_phone` varchar(200) NOT NULL,
  `address_1` varchar(300) NOT NULL,
  `address_2` varchar(300) NOT NULL,
  `city` varchar(300) NOT NULL,
  `postcode` varchar(10) NOT NULL,
  `country_id` int(11) NOT NULL,
  `zone_id` varchar(300) NOT NULL,
  `store_icon` varchar(300) NOT NULL,
  `store_banner` varchar(300) NOT NULL,
  `paypal_id` varchar(300) NOT NULL,
  `bank_name` varchar(300) NOT NULL,
  `branch_number` varchar(300) NOT NULL,
  `swift_code` varchar(300) NOT NULL,
  `account_name` varchar(300) NOT NULL,
  `account_number` varchar(300) NOT NULL,
  `facebook_url` varchar(300) NOT NULL,
  `instagram_url` varchar(300) NOT NULL,
  `twitter_url` varchar(300) NOT NULL,
  `linkedin_url` varchar(300) NOT NULL,
  `seller_status` tinyint(1) DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_lsm_seller_desc`
--

CREATE TABLE `supermart_lsm_seller_desc` (
  `seller_id` int(11) NOT NULL,
  `language_id` int(5) NOT NULL,
  `store_description` text NOT NULL,
  `store_shipping_policy` text NOT NULL,
  `store_return_policy` text NOT NULL,
  `store_meta_keyword` varchar(300) NOT NULL,
  `store_meta_description` varchar(300) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_lsm_seller_order_history`
--

CREATE TABLE `supermart_lsm_seller_order_history` (
  `seller_id` int(11) NOT NULL,
  `order_history_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `order_status_id` int(11) NOT NULL,
  `notify` tinyint(1) DEFAULT 0,
  `comment` text NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_manufacturer`
--

CREATE TABLE `supermart_manufacturer` (
  `manufacturer_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_manufacturer`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_manufacturer_to_store`
--

CREATE TABLE `supermart_manufacturer_to_store` (
  `manufacturer_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_manufacturer_to_store`
--
-------------------------------

--
-- Table structure for table `supermart_marketing`
--

CREATE TABLE `supermart_marketing` (
  `marketing_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `description` text NOT NULL,
  `code` varchar(64) NOT NULL,
  `clicks` int(5) NOT NULL DEFAULT 0,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_megamenu`
--

CREATE TABLE `supermart_megamenu` (
  `megamenu_id` int(11) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '',
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `is_group` smallint(6) NOT NULL DEFAULT 2,
  `width` varchar(255) DEFAULT NULL,
  `submenu_width` varchar(255) DEFAULT NULL,
  `colum_width` varchar(255) DEFAULT NULL,
  `submenu_colum_width` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `colums` varchar(255) DEFAULT '1',
  `type` varchar(255) NOT NULL,
  `is_content` smallint(6) NOT NULL DEFAULT 2,
  `show_title` smallint(6) NOT NULL DEFAULT 1,
  `type_submenu` varchar(10) NOT NULL DEFAULT '1',
  `level_depth` smallint(6) NOT NULL DEFAULT 0,
  `published` smallint(6) NOT NULL DEFAULT 1,
  `store_id` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `position` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `show_sub` smallint(6) NOT NULL DEFAULT 0,
  `url` varchar(255) DEFAULT NULL,
  `target` varchar(25) DEFAULT NULL,
  `privacy` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `position_type` varchar(25) DEFAULT 'top',
  `menu_class` varchar(25) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `content_text` text DEFAULT NULL,
  `submenu_content` text DEFAULT NULL,
  `level` int(11) NOT NULL,
  `left` int(11) NOT NULL,
  `right` int(11) NOT NULL,
  `widget_id` int(11) DEFAULT 0,
  `badges` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_megamenu`

-- --------------------------------------------------------

--
-- Table structure for table `supermart_megamenu_description`
--

CREATE TABLE `supermart_megamenu_description` (
  `megamenu_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_megamenu_description`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_megamenu_widgets`
--

CREATE TABLE `supermart_megamenu_widgets` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `type` varchar(255) NOT NULL,
  `params` text NOT NULL,
  `store_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_megamenu_widgets`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_modification`
--

CREATE TABLE `supermart_modification` (
  `modification_id` int(11) NOT NULL,
  `extension_install_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `code` varchar(64) NOT NULL,
  `author` varchar(64) NOT NULL,
  `version` varchar(32) NOT NULL,
  `link` varchar(255) NOT NULL,
  `xml` mediumtext NOT NULL,
  `status` tinyint(1) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_module`
--

CREATE TABLE `supermart_module` (
  `module_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `code` varchar(32) NOT NULL,
  `setting` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_module`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxnewsletter_draft`
--

CREATE TABLE `supermart_openfoxnewsletter_draft` (
  `draft_id` int(11) NOT NULL,
  `store_id` int(11) DEFAULT 0,
  `to` varchar(200) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `customer_group_id` int(11) DEFAULT NULL,
  `customer` varchar(255) DEFAULT NULL,
  `affiliate` varchar(255) DEFAULT NULL,
  `product` varchar(255) DEFAULT NULL,
  `date_added` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxnewsletter_email`
--

CREATE TABLE `supermart_openfoxnewsletter_email` (
  `email_id` int(11) NOT NULL,
  `template_id` int(11) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `attach` varchar(200) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `customer_group_id` int(11) DEFAULT NULL,
  `affiliate` varchar(255) DEFAULT NULL,
  `customer` varchar(255) DEFAULT NULL,
  `product` varchar(255) DEFAULT NULL,
  `defined` varchar(255) DEFAULT NULL,
  `special` varchar(255) DEFAULT NULL,
  `latest` varchar(255) DEFAULT NULL,
  `popular` varchar(255) DEFAULT NULL,
  `defined_categories` varchar(255) DEFAULT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `defined_products` varchar(255) DEFAULT NULL,
  `defined_products_more` varchar(255) DEFAULT NULL,
  `only_selected_language` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `to` varchar(200) DEFAULT NULL,
  `date_added` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxnewsletter_history`
--

CREATE TABLE `supermart_openfoxnewsletter_history` (
  `id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `template_id` int(11) NOT NULL,
  `public_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `to` varchar(255) NOT NULL,
  `subject` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date_added` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxnewsletter_subscribe`
--

CREATE TABLE `supermart_openfoxnewsletter_subscribe` (
  `subscribe_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT 0,
  `store_id` int(11) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `action` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxnewsletter_subscribe`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxnewsletter_template`
--

CREATE TABLE `supermart_openfoxnewsletter_template` (
  `template_id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `hits` tinyint(4) DEFAULT 0,
  `template_file` varchar(200) DEFAULT NULL,
  `is_default` tinyint(1) DEFAULT 0,
  `date_added` datetime DEFAULT NULL,
  `ordering` int(11) DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxnewsletter_template_description`
--

CREATE TABLE `supermart_openfoxnewsletter_template_description` (
  `template_id` int(11) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `template_message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxblog_category`
--

CREATE TABLE `supermart_openfoxxblog_category` (
  `category_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `column` int(3) NOT NULL DEFAULT 1,
  `status` tinyint(1) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxblog_category`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxblog_category_description`
--

CREATE TABLE `supermart_openfoxxblog_category_description` (
  `category_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_description` varchar(255) NOT NULL,
  `meta_keyword` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxblog_category_description`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxblog_category_path`
--

CREATE TABLE `supermart_openfoxxblog_category_path` (
  `category_id` int(11) NOT NULL,
  `path_id` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxblog_category_path`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxblog_category_to_store`
--

CREATE TABLE `supermart_openfoxxblog_category_to_store` (
  `category_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxblog_category_to_store`
--
--
-- Table structure for table `supermart_openfoxxblog_comment`
--

CREATE TABLE `supermart_openfoxxblog_comment` (
  `comment_id` int(11) NOT NULL,
  `comment_title` varchar(255) DEFAULT NULL,
  `comment_email` varchar(96) NOT NULL,
  `comment_post_id` int(11) NOT NULL,
  `comment_user_id` int(11) NOT NULL DEFAULT 0,
  `comment_customer_id` int(11) NOT NULL DEFAULT 0,
  `comment_name` varchar(64) NOT NULL,
  `comment_text` text NOT NULL,
  `comment_rating` int(1) NOT NULL,
  `comment_status` tinyint(1) NOT NULL DEFAULT 0,
  `comment_parent_id` int(11) NOT NULL DEFAULT 0,
  `comment_subscribe` tinyint(1) NOT NULL DEFAULT 0,
  `comment_store_id` int(11) NOT NULL DEFAULT 0,
  `comment_language_id` int(11) NOT NULL DEFAULT 0,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxblog_comment`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxblog_post`
--

CREATE TABLE `supermart_openfoxxblog_post` (
  `post_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `gallery` text DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `viewed` int(5) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL,
  `featured` tinyint(1) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxblog_post`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxblog_post_description`
--

CREATE TABLE `supermart_openfoxxblog_post_description` (
  `post_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `content` text DEFAULT NULL,
  `tag` text DEFAULT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_description` varchar(255) NOT NULL,
  `meta_keyword` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxblog_post_description`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxblog_post_to_category`
--

CREATE TABLE `supermart_openfoxxblog_post_to_category` (
  `post_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxblog_post_to_category`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxblog_post_to_store`
--

CREATE TABLE `supermart_openfoxxblog_post_to_store` (
  `post_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxblog_subscribe_post`
--

CREATE TABLE `supermart_openfoxxblog_subscribe_post` (
  `subscribe_id` int(11) NOT NULL,
  `subscribe_email` varchar(96) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxbuilder`
--

CREATE TABLE `supermart_openfoxxbuilder` (
  `module_uniqid_id` char(32) NOT NULL,
  `settings` longtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxbuilder`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxslidergroups`
--

CREATE TABLE `supermart_openfoxxslidergroups` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `params` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxslidergroups`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_openfoxxsliderlayers`
--

CREATE TABLE `supermart_openfoxxsliderlayers` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `params` text NOT NULL,
  `layersparams` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `position` int(11) NOT NULL,
  `language_id` int(11) DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_openfoxxsliderlayers`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_option`
--

CREATE TABLE `supermart_option` (
  `option_id` int(11) NOT NULL,
  `type` varchar(32) NOT NULL,
  `sort_order` int(3) NOT NULL,
  `seller_id` int(11) DEFAULT 0 COMMENT '0 for admin'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_option`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_option_description`
--

CREATE TABLE `supermart_option_description` (
  `option_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_option_description`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_option_value`
--

CREATE TABLE `supermart_option_value` (
  `option_value_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_option_value`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_option_value_description`
--

CREATE TABLE `supermart_option_value_description` (
  `option_value_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_option_value_description`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_order`
--

CREATE TABLE `supermart_order` (
  `order_id` int(11) NOT NULL,
  `invoice_no` int(11) NOT NULL DEFAULT 0,
  `invoice_prefix` varchar(26) NOT NULL,
  `store_id` int(11) NOT NULL DEFAULT 0,
  `store_name` varchar(64) NOT NULL,
  `store_url` varchar(255) NOT NULL,
  `customer_id` int(11) NOT NULL DEFAULT 0,
  `customer_group_id` int(11) NOT NULL DEFAULT 0,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL,
  `email` varchar(96) NOT NULL,
  `telephone` varchar(32) NOT NULL,
  `fax` varchar(32) NOT NULL,
  `custom_field` text NOT NULL,
  `payment_firstname` varchar(32) NOT NULL,
  `payment_lastname` varchar(32) NOT NULL,
  `payment_company` varchar(60) NOT NULL,
  `payment_address_1` varchar(128) NOT NULL,
  `payment_address_2` varchar(128) NOT NULL,
  `payment_city` varchar(128) NOT NULL,
  `payment_postcode` varchar(10) NOT NULL,
  `payment_country` varchar(128) NOT NULL,
  `payment_country_id` int(11) NOT NULL,
  `payment_zone` varchar(128) NOT NULL,
  `payment_zone_id` int(11) NOT NULL,
  `payment_address_format` text NOT NULL,
  `payment_custom_field` text NOT NULL,
  `payment_method` varchar(128) NOT NULL,
  `payment_code` varchar(128) NOT NULL,
  `shipping_firstname` varchar(32) NOT NULL,
  `shipping_lastname` varchar(32) NOT NULL,
  `shipping_company` varchar(40) NOT NULL,
  `shipping_address_1` varchar(128) NOT NULL,
  `shipping_address_2` varchar(128) NOT NULL,
  `shipping_city` varchar(128) NOT NULL,
  `shipping_postcode` varchar(10) NOT NULL,
  `shipping_country` varchar(128) NOT NULL,
  `shipping_country_id` int(11) NOT NULL,
  `shipping_zone` varchar(128) NOT NULL,
  `shipping_zone_id` int(11) NOT NULL,
  `shipping_address_format` text NOT NULL,
  `shipping_custom_field` text NOT NULL,
  `shipping_method` varchar(128) NOT NULL,
  `shipping_code` varchar(128) NOT NULL,
  `comment` text NOT NULL,
  `total` decimal(15,4) NOT NULL DEFAULT 0.0000,
  `order_status_id` int(11) NOT NULL DEFAULT 0,
  `affiliate_id` int(11) NOT NULL,
  `commission` decimal(15,4) NOT NULL,
  `marketing_id` int(11) NOT NULL,
  `tracking` varchar(64) NOT NULL,
  `language_id` int(11) NOT NULL,
  `currency_id` int(11) NOT NULL,
  `currency_code` varchar(3) NOT NULL,
  `currency_value` decimal(15,8) NOT NULL DEFAULT 1.00000000,
  `ip` varchar(40) NOT NULL,
  `forwarded_ip` varchar(40) NOT NULL,
  `user_agent` varchar(255) NOT NULL,
  `accept_language` varchar(255) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_order`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_order_history`
--

CREATE TABLE `supermart_order_history` (
  `order_history_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `order_status_id` int(11) NOT NULL,
  `notify` tinyint(1) NOT NULL DEFAULT 0,
  `comment` text NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_order_history`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_order_option`
--

CREATE TABLE `supermart_order_option` (
  `order_option_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `order_product_id` int(11) NOT NULL,
  `product_option_id` int(11) NOT NULL,
  `product_option_value_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(255) NOT NULL,
  `value` text NOT NULL,
  `type` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_order_option`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_order_product`
--

CREATE TABLE `supermart_order_product` (
  `order_product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `model` varchar(64) NOT NULL,
  `quantity` int(4) NOT NULL,
  `price` decimal(15,4) NOT NULL DEFAULT 0.0000,
  `total` decimal(15,4) NOT NULL DEFAULT 0.0000,
  `tax` decimal(15,4) NOT NULL DEFAULT 0.0000,
  `reward` int(8) NOT NULL,
  `seller_id` int(11) DEFAULT 0 COMMENT '0 for admin',
  `commission` decimal(15,4) DEFAULT 0.0000,
  `commission_type` varchar(100) DEFAULT 'percent' COMMENT 'percent or fixed',
  `commission_amount` decimal(15,4) DEFAULT 0.0000,
  `tracking_number` varchar(200) DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_order_product`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_order_recurring`
--

CREATE TABLE `supermart_order_recurring` (
  `order_recurring_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `reference` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `recurring_id` int(11) NOT NULL,
  `recurring_name` varchar(255) NOT NULL,
  `recurring_description` varchar(255) NOT NULL,
  `recurring_frequency` varchar(25) NOT NULL,
  `recurring_cycle` smallint(6) NOT NULL,
  `recurring_duration` smallint(6) NOT NULL,
  `recurring_price` decimal(10,4) NOT NULL,
  `trial` tinyint(1) NOT NULL,
  `trial_frequency` varchar(25) NOT NULL,
  `trial_cycle` smallint(6) NOT NULL,
  `trial_duration` smallint(6) NOT NULL,
  `trial_price` decimal(10,4) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_order_recurring_transaction`
--

CREATE TABLE `supermart_order_recurring_transaction` (
  `order_recurring_transaction_id` int(11) NOT NULL,
  `order_recurring_id` int(11) NOT NULL,
  `reference` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `amount` decimal(10,4) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_order_shipment`
--

CREATE TABLE `supermart_order_shipment` (
  `order_shipment_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `date_added` datetime NOT NULL,
  `shipping_courier_id` varchar(255) NOT NULL DEFAULT '',
  `tracking_number` varchar(255) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_order_status`
--

CREATE TABLE `supermart_order_status` (
  `order_status_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_order_status`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_order_total`
--

CREATE TABLE `supermart_order_total` (
  `order_total_id` int(10) NOT NULL,
  `order_id` int(11) NOT NULL,
  `code` varchar(32) NOT NULL,
  `title` varchar(255) NOT NULL,
  `value` decimal(15,4) NOT NULL DEFAULT 0.0000,
  `sort_order` int(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_order_total`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_order_voucher`
--

CREATE TABLE `supermart_order_voucher` (
  `order_voucher_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `voucher_id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `code` varchar(10) NOT NULL,
  `from_name` varchar(64) NOT NULL,
  `from_email` varchar(96) NOT NULL,
  `to_name` varchar(64) NOT NULL,
  `to_email` varchar(96) NOT NULL,
  `voucher_theme_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `amount` decimal(15,4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product`
--

CREATE TABLE `supermart_product` (
  `product_id` int(11) NOT NULL,
  `metal` int(1) NOT NULL DEFAULT 0,
  `model` varchar(64) NOT NULL,
  `sku` varchar(64) NOT NULL,
  `upc` varchar(12) NOT NULL,
  `ean` varchar(14) NOT NULL,
  `jan` varchar(13) NOT NULL,
  `isbn` varchar(17) NOT NULL,
  `mpn` varchar(64) NOT NULL,
  `location` varchar(128) NOT NULL,
  `quantity` int(4) NOT NULL DEFAULT 0,
  `stock_status_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `manufacturer_id` int(11) NOT NULL,
  `shipping` tinyint(1) NOT NULL DEFAULT 1,
  `price` decimal(15,4) NOT NULL DEFAULT 0.0000,
  `price_extra_type` int(1) NOT NULL DEFAULT 0,
  `price_extra` decimal(15,4) NOT NULL DEFAULT 0.0000,
  `points` int(8) NOT NULL DEFAULT 0,
  `tax_class_id` int(11) NOT NULL,
  `date_available` date NOT NULL DEFAULT '0000-00-00',
  `weight` decimal(15,8) NOT NULL DEFAULT 0.00000000,
  `weight_class_id` int(11) NOT NULL DEFAULT 0,
  `length` decimal(15,8) NOT NULL DEFAULT 0.00000000,
  `width` decimal(15,8) NOT NULL DEFAULT 0.00000000,
  `height` decimal(15,8) NOT NULL DEFAULT 0.00000000,
  `length_class_id` int(11) NOT NULL DEFAULT 0,
  `subtract` tinyint(1) NOT NULL DEFAULT 1,
  `minimum` int(11) NOT NULL DEFAULT 1,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `viewed` int(5) NOT NULL DEFAULT 0,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  `seller_id` int(11) DEFAULT 0 COMMENT '0 for admin',
  `is_approved` tinyint(1) DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_attribute`
--

CREATE TABLE `supermart_product_attribute` (
  `product_id` int(11) NOT NULL,
  `attribute_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `text` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_attribute`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_description`
--

CREATE TABLE `supermart_product_description` (
  `product_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `tag` text NOT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_description` varchar(255) NOT NULL,
  `meta_keyword` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_description`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_discount`
--

CREATE TABLE `supermart_product_discount` (
  `product_discount_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_group_id` int(11) NOT NULL,
  `quantity` int(4) NOT NULL DEFAULT 0,
  `priority` int(5) NOT NULL DEFAULT 1,
  `price` decimal(15,4) NOT NULL DEFAULT 0.0000,
  `date_start` date NOT NULL DEFAULT '0000-00-00',
  `date_end` date NOT NULL DEFAULT '0000-00-00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_discount`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_filter`
--

CREATE TABLE `supermart_product_filter` (
  `product_id` int(11) NOT NULL,
  `filter_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_filter`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_image`
--

CREATE TABLE `supermart_product_image` (
  `product_image_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `sort_order` int(3) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_image`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_option`
--

CREATE TABLE `supermart_product_option` (
  `product_option_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  `value` text NOT NULL,
  `required` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_option`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_option_value`
--

CREATE TABLE `supermart_product_option_value` (
  `product_option_value_id` int(11) NOT NULL,
  `product_option_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  `option_value_id` int(11) NOT NULL,
  `quantity` int(3) NOT NULL,
  `subtract` tinyint(1) NOT NULL,
  `price` decimal(15,4) NOT NULL,
  `price_prefix` varchar(1) NOT NULL,
  `points` int(8) NOT NULL,
  `points_prefix` varchar(1) NOT NULL,
  `weight` decimal(15,8) NOT NULL,
  `weight_prefix` varchar(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_option_value`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_recurring`
--

CREATE TABLE `supermart_product_recurring` (
  `product_id` int(11) NOT NULL,
  `recurring_id` int(11) NOT NULL,
  `customer_group_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_related`
--

CREATE TABLE `supermart_product_related` (
  `product_id` int(11) NOT NULL,
  `related_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_related`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_reward`
--

CREATE TABLE `supermart_product_reward` (
  `product_reward_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL DEFAULT 0,
  `customer_group_id` int(11) NOT NULL DEFAULT 0,
  `points` int(8) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_reward`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_special`
--

CREATE TABLE `supermart_product_special` (
  `product_special_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_group_id` int(11) NOT NULL,
  `priority` int(5) NOT NULL DEFAULT 1,
  `price` decimal(15,4) NOT NULL DEFAULT 0.0000,
  `date_start` date NOT NULL DEFAULT '0000-00-00',
  `date_end` date NOT NULL DEFAULT '0000-00-00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_special`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_to_category`
--

CREATE TABLE `supermart_product_to_category` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_to_category`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_to_download`
--

CREATE TABLE `supermart_product_to_download` (
  `product_id` int(11) NOT NULL,
  `download_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_to_download`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_to_layout`
--

CREATE TABLE `supermart_product_to_layout` (
  `product_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `layout_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_to_layout`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_product_to_store`
--

CREATE TABLE `supermart_product_to_store` (
  `product_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_product_to_store`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_recurring`
--

CREATE TABLE `supermart_recurring` (
  `recurring_id` int(11) NOT NULL,
  `price` decimal(10,4) NOT NULL,
  `frequency` enum('day','week','semi_month','month','year') NOT NULL,
  `duration` int(10) UNSIGNED NOT NULL,
  `cycle` int(10) UNSIGNED NOT NULL,
  `trial_status` tinyint(4) NOT NULL,
  `trial_price` decimal(10,4) NOT NULL,
  `trial_frequency` enum('day','week','semi_month','month','year') NOT NULL,
  `trial_duration` int(10) UNSIGNED NOT NULL,
  `trial_cycle` int(10) UNSIGNED NOT NULL,
  `status` tinyint(4) NOT NULL,
  `sort_order` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_recurring_description`
--

CREATE TABLE `supermart_recurring_description` (
  `recurring_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_return`
--

CREATE TABLE `supermart_return` (
  `return_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL,
  `email` varchar(96) NOT NULL,
  `telephone` varchar(32) NOT NULL,
  `product` varchar(255) NOT NULL,
  `model` varchar(64) NOT NULL,
  `quantity` int(4) NOT NULL,
  `opened` tinyint(1) NOT NULL,
  `return_reason_id` int(11) NOT NULL,
  `return_action_id` int(11) NOT NULL,
  `return_status_id` int(11) NOT NULL,
  `comment` text DEFAULT NULL,
  `date_ordered` date NOT NULL DEFAULT '0000-00-00',
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_return_action`
--

CREATE TABLE `supermart_return_action` (
  `return_action_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_return_action`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_return_history`
--

CREATE TABLE `supermart_return_history` (
  `return_history_id` int(11) NOT NULL,
  `return_id` int(11) NOT NULL,
  `return_status_id` int(11) NOT NULL,
  `notify` tinyint(1) NOT NULL,
  `comment` text NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_return_reason`
--

CREATE TABLE `supermart_return_reason` (
  `return_reason_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(128) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_return_reason`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_return_status`
--

CREATE TABLE `supermart_return_status` (
  `return_status_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_return_status`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_review`
--

CREATE TABLE `supermart_review` (
  `review_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `author` varchar(64) NOT NULL,
  `text` text NOT NULL,
  `rating` int(1) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_review`
------------------------------------------------

--
-- Table structure for table `supermart_seo_url`
--

CREATE TABLE `supermart_seo_url` (
  `seo_url_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `query` varchar(255) NOT NULL,
  `keyword` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_seo_url`
--

--
-- Table structure for table `supermart_session`
--

CREATE TABLE `supermart_session` (
  `session_id` varchar(32) NOT NULL,
  `data` text NOT NULL,
  `expire` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_session`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_setting`
--

CREATE TABLE `supermart_setting` (
  `setting_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL DEFAULT 0,
  `code` varchar(128) NOT NULL,
  `key` varchar(128) NOT NULL,
  `value` text NOT NULL,
  `serialized` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_setting`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_shipping_courier`
--

CREATE TABLE `supermart_shipping_courier` (
  `shipping_courier_id` int(11) NOT NULL,
  `shipping_courier_code` varchar(255) NOT NULL DEFAULT '',
  `shipping_courier_name` varchar(255) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_shipping_courier`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_statistics`
--

CREATE TABLE `supermart_statistics` (
  `statistics_id` int(11) NOT NULL,
  `code` varchar(64) NOT NULL,
  `value` decimal(15,4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_statistics`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_stock_status`
--

CREATE TABLE `supermart_stock_status` (
  `stock_status_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_stock_status`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_store`
--

CREATE TABLE `supermart_store` (
  `store_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `url` varchar(255) NOT NULL,
  `ssl` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_store`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_tax_class`
--

CREATE TABLE `supermart_tax_class` (
  `tax_class_id` int(11) NOT NULL,
  `title` varchar(32) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_tax_class`
--


--
-- Table structure for table `supermart_tax_rate`
--

CREATE TABLE `supermart_tax_rate` (
  `tax_rate_id` int(11) NOT NULL,
  `geo_zone_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(32) NOT NULL,
  `rate` decimal(15,4) NOT NULL DEFAULT 0.0000,
  `type` char(1) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_tax_rate`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_tax_rate_to_customer_group`
--

CREATE TABLE `supermart_tax_rate_to_customer_group` (
  `tax_rate_id` int(11) NOT NULL,
  `customer_group_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_tax_rate_to_customer_group`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_tax_rule`
--

CREATE TABLE `supermart_tax_rule` (
  `tax_rule_id` int(11) NOT NULL,
  `tax_class_id` int(11) NOT NULL,
  `tax_rate_id` int(11) NOT NULL,
  `based` varchar(10) NOT NULL,
  `priority` int(5) NOT NULL DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_tax_rule`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_theme`
--

CREATE TABLE `supermart_theme` (
  `theme_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `theme` varchar(64) NOT NULL,
  `route` varchar(64) NOT NULL,
  `code` mediumtext NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_translation`
--

CREATE TABLE `supermart_translation` (
  `translation_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `route` varchar(64) NOT NULL,
  `key` varchar(64) NOT NULL,
  `value` text NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_upload`
--

CREATE TABLE `supermart_upload` (
  `upload_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_user`
--

CREATE TABLE `supermart_user` (
  `user_id` int(11) NOT NULL,
  `user_group_id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `salt` varchar(9) NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL,
  `email` varchar(96) NOT NULL,
  `image` varchar(255) NOT NULL,
  `code` varchar(40) NOT NULL,
  `ip` varchar(40) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_user`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_user_group`
--

CREATE TABLE `supermart_user_group` (
  `user_group_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `permission` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_user_group`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_verticalmenu`
--

CREATE TABLE `supermart_verticalmenu` (
  `verticalmenu_id` int(11) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '',
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `is_group` smallint(6) NOT NULL DEFAULT 2,
  `width` varchar(255) DEFAULT NULL,
  `submenu_width` varchar(255) DEFAULT NULL,
  `colum_width` varchar(255) DEFAULT NULL,
  `submenu_colum_width` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `colums` varchar(255) DEFAULT '1',
  `type` varchar(255) NOT NULL,
  `is_content` smallint(6) NOT NULL DEFAULT 2,
  `show_title` smallint(6) NOT NULL DEFAULT 1,
  `type_submenu` varchar(10) NOT NULL DEFAULT '1',
  `level_depth` smallint(6) NOT NULL DEFAULT 0,
  `published` smallint(6) NOT NULL DEFAULT 1,
  `store_id` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `position` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `show_sub` smallint(6) NOT NULL DEFAULT 0,
  `url` varchar(255) DEFAULT NULL,
  `target` varchar(25) DEFAULT NULL,
  `privacy` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `position_type` varchar(25) DEFAULT 'top',
  `menu_class` varchar(25) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `content_text` text DEFAULT NULL,
  `submenu_content` text DEFAULT NULL,
  `level` int(11) NOT NULL,
  `left` int(11) NOT NULL,
  `right` int(11) NOT NULL,
  `widget_id` int(11) DEFAULT 0,
  `badges` text DEFAULT NULL,
  `icon` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_verticalmenu`
--
-- --------------------------------------------------------

--
-- Table structure for table `supermart_verticalmenu_description`
--

CREATE TABLE `supermart_verticalmenu_description` (
  `verticalmenu_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_verticalmenu_description`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_verticalmenu_widgets`
--

CREATE TABLE `supermart_verticalmenu_widgets` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `type` varchar(255) NOT NULL,
  `params` text NOT NULL,
  `store_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_verticalmenu_widgets`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_voucher`
--

CREATE TABLE `supermart_voucher` (
  `voucher_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `code` varchar(10) NOT NULL,
  `from_name` varchar(64) NOT NULL,
  `from_email` varchar(96) NOT NULL,
  `to_name` varchar(64) NOT NULL,
  `to_email` varchar(96) NOT NULL,
  `voucher_theme_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `amount` decimal(15,4) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_voucher_history`
--

CREATE TABLE `supermart_voucher_history` (
  `voucher_history_id` int(11) NOT NULL,
  `voucher_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `amount` decimal(15,4) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `supermart_voucher_theme`
--

CREATE TABLE `supermart_voucher_theme` (
  `voucher_theme_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_voucher_theme`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_voucher_theme_description`
--

CREATE TABLE `supermart_voucher_theme_description` (
  `voucher_theme_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_voucher_theme_description`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_weight_class`
--

CREATE TABLE `supermart_weight_class` (
  `weight_class_id` int(11) NOT NULL,
  `value` decimal(15,8) NOT NULL DEFAULT 0.00000000
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_weight_class`
--


-- --------------------------------------------------------

--
-- Table structure for table `supermart_weight_class_description`
--

CREATE TABLE `supermart_weight_class_description` (
  `weight_class_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `title` varchar(32) NOT NULL,
  `unit` varchar(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_weight_class_description`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_zone`
--

CREATE TABLE `supermart_zone` (
  `zone_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `code` varchar(32) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_zone`
--

-- --------------------------------------------------------

--
-- Table structure for table `supermart_zone_to_geo_zone`
--

CREATE TABLE `supermart_zone_to_geo_zone` (
  `zone_to_geo_zone_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL DEFAULT 0,
  `geo_zone_id` int(11) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supermart_zone_to_geo_zone`
--

--
-- Indexes for dumped tables
--

--
-- Indexes for table `supermart_address`
--
ALTER TABLE `supermart_address`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `supermart_api`
--
ALTER TABLE `supermart_api`
  ADD PRIMARY KEY (`api_id`);

--
-- Indexes for table `supermart_api_ip`
--
ALTER TABLE `supermart_api_ip`
  ADD PRIMARY KEY (`api_ip_id`);

--
-- Indexes for table `supermart_api_session`
--
ALTER TABLE `supermart_api_session`
  ADD PRIMARY KEY (`api_session_id`);

--
-- Indexes for table `supermart_attribute`
--
ALTER TABLE `supermart_attribute`
  ADD PRIMARY KEY (`attribute_id`);

--
-- Indexes for table `supermart_attribute_description`
--
ALTER TABLE `supermart_attribute_description`
  ADD PRIMARY KEY (`attribute_id`,`language_id`);

--
-- Indexes for table `supermart_attribute_group`
--
ALTER TABLE `supermart_attribute_group`
  ADD PRIMARY KEY (`attribute_group_id`);

--
-- Indexes for table `supermart_attribute_group_description`
--
ALTER TABLE `supermart_attribute_group_description`
  ADD PRIMARY KEY (`attribute_group_id`,`language_id`);

--
-- Indexes for table `supermart_banner`
--
ALTER TABLE `supermart_banner`
  ADD PRIMARY KEY (`banner_id`);

--
-- Indexes for table `supermart_banner_image`
--
ALTER TABLE `supermart_banner_image`
  ADD PRIMARY KEY (`banner_image_id`);

--
-- Indexes for table `supermart_cart`
--
ALTER TABLE `supermart_cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `cart_id` (`api_id`,`customer_id`,`session_id`,`product_id`,`recurring_id`);

--
-- Indexes for table `supermart_category`
--
ALTER TABLE `supermart_category`
  ADD PRIMARY KEY (`category_id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- Indexes for table `supermart_category_description`
--
ALTER TABLE `supermart_category_description`
  ADD PRIMARY KEY (`category_id`,`language_id`),
  ADD KEY `name` (`name`);

--
-- Indexes for table `supermart_category_filter`
--
ALTER TABLE `supermart_category_filter`
  ADD PRIMARY KEY (`category_id`,`filter_id`);

--
-- Indexes for table `supermart_category_path`
--
ALTER TABLE `supermart_category_path`
  ADD PRIMARY KEY (`category_id`,`path_id`);

--
-- Indexes for table `supermart_category_to_layout`
--
ALTER TABLE `supermart_category_to_layout`
  ADD PRIMARY KEY (`category_id`,`store_id`);

--
-- Indexes for table `supermart_category_to_store`
--
ALTER TABLE `supermart_category_to_store`
  ADD PRIMARY KEY (`category_id`,`store_id`);

--
-- Indexes for table `supermart_country`
--
ALTER TABLE `supermart_country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `supermart_coupon`
--
ALTER TABLE `supermart_coupon`
  ADD PRIMARY KEY (`coupon_id`);

--
-- Indexes for table `supermart_coupon_category`
--
ALTER TABLE `supermart_coupon_category`
  ADD PRIMARY KEY (`coupon_id`,`category_id`);

--
-- Indexes for table `supermart_coupon_history`
--
ALTER TABLE `supermart_coupon_history`
  ADD PRIMARY KEY (`coupon_history_id`);

--
-- Indexes for table `supermart_coupon_product`
--
ALTER TABLE `supermart_coupon_product`
  ADD PRIMARY KEY (`coupon_product_id`);

--
-- Indexes for table `supermart_currency`
--
ALTER TABLE `supermart_currency`
  ADD PRIMARY KEY (`currency_id`);

--
-- Indexes for table `supermart_customer`
--
ALTER TABLE `supermart_customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `supermart_customer_activity`
--
ALTER TABLE `supermart_customer_activity`
  ADD PRIMARY KEY (`customer_activity_id`);

--
-- Indexes for table `supermart_customer_affiliate`
--
ALTER TABLE `supermart_customer_affiliate`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `supermart_customer_approval`
--
ALTER TABLE `supermart_customer_approval`
  ADD PRIMARY KEY (`customer_approval_id`);

--
-- Indexes for table `supermart_customer_group`
--
ALTER TABLE `supermart_customer_group`
  ADD PRIMARY KEY (`customer_group_id`);

--
-- Indexes for table `supermart_customer_group_description`
--
ALTER TABLE `supermart_customer_group_description`
  ADD PRIMARY KEY (`customer_group_id`,`language_id`);

--
-- Indexes for table `supermart_customer_history`
--
ALTER TABLE `supermart_customer_history`
  ADD PRIMARY KEY (`customer_history_id`);

--
-- Indexes for table `supermart_customer_ip`
--
ALTER TABLE `supermart_customer_ip`
  ADD PRIMARY KEY (`customer_ip_id`),
  ADD KEY `ip` (`ip`);

--
-- Indexes for table `supermart_customer_login`
--
ALTER TABLE `supermart_customer_login`
  ADD PRIMARY KEY (`customer_login_id`),
  ADD KEY `email` (`email`),
  ADD KEY `ip` (`ip`);

--
-- Indexes for table `supermart_customer_online`
--
ALTER TABLE `supermart_customer_online`
  ADD PRIMARY KEY (`ip`);

--
-- Indexes for table `supermart_customer_reward`
--
ALTER TABLE `supermart_customer_reward`
  ADD PRIMARY KEY (`customer_reward_id`);

--
-- Indexes for table `supermart_customer_search`
--
ALTER TABLE `supermart_customer_search`
  ADD PRIMARY KEY (`customer_search_id`);

--
-- Indexes for table `supermart_customer_transaction`
--
ALTER TABLE `supermart_customer_transaction`
  ADD PRIMARY KEY (`customer_transaction_id`);

--
-- Indexes for table `supermart_customer_wishlist`
--
ALTER TABLE `supermart_customer_wishlist`
  ADD PRIMARY KEY (`customer_id`,`product_id`);

--
-- Indexes for table `supermart_custom_field`
--
ALTER TABLE `supermart_custom_field`
  ADD PRIMARY KEY (`custom_field_id`);

--
-- Indexes for table `supermart_custom_field_customer_group`
--
ALTER TABLE `supermart_custom_field_customer_group`
  ADD PRIMARY KEY (`custom_field_id`,`customer_group_id`);

--
-- Indexes for table `supermart_custom_field_description`
--
ALTER TABLE `supermart_custom_field_description`
  ADD PRIMARY KEY (`custom_field_id`,`language_id`);

--
-- Indexes for table `supermart_custom_field_value`
--
ALTER TABLE `supermart_custom_field_value`
  ADD PRIMARY KEY (`custom_field_value_id`);

--
-- Indexes for table `supermart_custom_field_value_description`
--
ALTER TABLE `supermart_custom_field_value_description`
  ADD PRIMARY KEY (`custom_field_value_id`,`language_id`);

--
-- Indexes for table `supermart_download`
--
ALTER TABLE `supermart_download`
  ADD PRIMARY KEY (`download_id`);

--
-- Indexes for table `supermart_download_description`
--
ALTER TABLE `supermart_download_description`
  ADD PRIMARY KEY (`download_id`,`language_id`);

--
-- Indexes for table `supermart_event`
--
ALTER TABLE `supermart_event`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `supermart_extension`
--
ALTER TABLE `supermart_extension`
  ADD PRIMARY KEY (`extension_id`);

--
-- Indexes for table `supermart_extension_install`
--
ALTER TABLE `supermart_extension_install`
  ADD PRIMARY KEY (`extension_install_id`);

--
-- Indexes for table `supermart_extension_path`
--
ALTER TABLE `supermart_extension_path`
  ADD PRIMARY KEY (`extension_path_id`);

--
-- Indexes for table `supermart_filter`
--
ALTER TABLE `supermart_filter`
  ADD PRIMARY KEY (`filter_id`);

--
-- Indexes for table `supermart_filter_description`
--
ALTER TABLE `supermart_filter_description`
  ADD PRIMARY KEY (`filter_id`,`language_id`);

--
-- Indexes for table `supermart_filter_group`
--
ALTER TABLE `supermart_filter_group`
  ADD PRIMARY KEY (`filter_group_id`);

--
-- Indexes for table `supermart_filter_group_description`
--
ALTER TABLE `supermart_filter_group_description`
  ADD PRIMARY KEY (`filter_group_id`,`language_id`);

--
-- Indexes for table `supermart_geo_zone`
--
ALTER TABLE `supermart_geo_zone`
  ADD PRIMARY KEY (`geo_zone_id`);

--
-- Indexes for table `supermart_information`
--
ALTER TABLE `supermart_information`
  ADD PRIMARY KEY (`information_id`);

--
-- Indexes for table `supermart_information_description`
--
ALTER TABLE `supermart_information_description`
  ADD PRIMARY KEY (`information_id`,`language_id`);

--
-- Indexes for table `supermart_information_to_layout`
--
ALTER TABLE `supermart_information_to_layout`
  ADD PRIMARY KEY (`information_id`,`store_id`);

--
-- Indexes for table `supermart_information_to_store`
--
ALTER TABLE `supermart_information_to_store`
  ADD PRIMARY KEY (`information_id`,`store_id`);

--
-- Indexes for table `supermart_language`
--
ALTER TABLE `supermart_language`
  ADD PRIMARY KEY (`language_id`),
  ADD KEY `name` (`name`);

--
-- Indexes for table `supermart_layout`
--
ALTER TABLE `supermart_layout`
  ADD PRIMARY KEY (`layout_id`);

--
-- Indexes for table `supermart_layout_module`
--
ALTER TABLE `supermart_layout_module`
  ADD PRIMARY KEY (`layout_module_id`);

--
-- Indexes for table `supermart_layout_route`
--
ALTER TABLE `supermart_layout_route`
  ADD PRIMARY KEY (`layout_route_id`);

--
-- Indexes for table `supermart_length_class`
--
ALTER TABLE `supermart_length_class`
  ADD PRIMARY KEY (`length_class_id`);

--
-- Indexes for table `supermart_length_class_description`
--
ALTER TABLE `supermart_length_class_description`
  ADD PRIMARY KEY (`length_class_id`,`language_id`);

--
-- Indexes for table `supermart_location`
--
ALTER TABLE `supermart_location`
  ADD PRIMARY KEY (`location_id`),
  ADD KEY `name` (`name`);

--
-- Indexes for table `supermart_lsmultivendor_payment_done_history`
--
ALTER TABLE `supermart_lsmultivendor_payment_done_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supermart_lsm_enquiry`
--
ALTER TABLE `supermart_lsm_enquiry`
  ADD PRIMARY KEY (`enquiry_id`);

--
-- Indexes for table `supermart_lsm_enquiry_message`
--
ALTER TABLE `supermart_lsm_enquiry_message`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `supermart_lsm_review`
--
ALTER TABLE `supermart_lsm_review`
  ADD PRIMARY KEY (`review_id`);

--
-- Indexes for table `supermart_lsm_seller`
--
ALTER TABLE `supermart_lsm_seller`
  ADD UNIQUE KEY `seller_id` (`seller_id`);

--
-- Indexes for table `supermart_manufacturer`
--
ALTER TABLE `supermart_manufacturer`
  ADD PRIMARY KEY (`manufacturer_id`);

--
-- Indexes for table `supermart_manufacturer_to_store`
--
ALTER TABLE `supermart_manufacturer_to_store`
  ADD PRIMARY KEY (`manufacturer_id`,`store_id`);

--
-- Indexes for table `supermart_marketing`
--
ALTER TABLE `supermart_marketing`
  ADD PRIMARY KEY (`marketing_id`);

--
-- Indexes for table `supermart_megamenu`
--
ALTER TABLE `supermart_megamenu`
  ADD PRIMARY KEY (`megamenu_id`);

--
-- Indexes for table `supermart_megamenu_description`
--
ALTER TABLE `supermart_megamenu_description`
  ADD PRIMARY KEY (`megamenu_id`,`language_id`),
  ADD KEY `name` (`title`);

--
-- Indexes for table `supermart_megamenu_widgets`
--
ALTER TABLE `supermart_megamenu_widgets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supermart_modification`
--
ALTER TABLE `supermart_modification`
  ADD PRIMARY KEY (`modification_id`);

--
-- Indexes for table `supermart_module`
--
ALTER TABLE `supermart_module`
  ADD PRIMARY KEY (`module_id`);

--
-- Indexes for table `supermart_openfoxnewsletter_draft`
--
ALTER TABLE `supermart_openfoxnewsletter_draft`
  ADD PRIMARY KEY (`draft_id`);

--
-- Indexes for table `supermart_openfoxnewsletter_email`
--
ALTER TABLE `supermart_openfoxnewsletter_email`
  ADD PRIMARY KEY (`email_id`);

--
-- Indexes for table `supermart_openfoxnewsletter_history`
--
ALTER TABLE `supermart_openfoxnewsletter_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supermart_openfoxnewsletter_subscribe`
--
ALTER TABLE `supermart_openfoxnewsletter_subscribe`
  ADD PRIMARY KEY (`subscribe_id`);

--
-- Indexes for table `supermart_openfoxnewsletter_template`
--
ALTER TABLE `supermart_openfoxnewsletter_template`
  ADD PRIMARY KEY (`template_id`);

--
-- Indexes for table `supermart_openfoxxblog_category`
--
ALTER TABLE `supermart_openfoxxblog_category`
  ADD PRIMARY KEY (`category_id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- Indexes for table `supermart_openfoxxblog_category_description`
--
ALTER TABLE `supermart_openfoxxblog_category_description`
  ADD PRIMARY KEY (`category_id`,`language_id`),
  ADD KEY `name` (`name`);

--
-- Indexes for table `supermart_openfoxxblog_category_path`
--
ALTER TABLE `supermart_openfoxxblog_category_path`
  ADD PRIMARY KEY (`category_id`,`path_id`);

--
-- Indexes for table `supermart_openfoxxblog_comment`
--
ALTER TABLE `supermart_openfoxxblog_comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_post_id` (`comment_post_id`);

--
-- Indexes for table `supermart_openfoxxblog_post`
--
ALTER TABLE `supermart_openfoxxblog_post`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `supermart_openfoxxblog_post_description`
--
ALTER TABLE `supermart_openfoxxblog_post_description`
  ADD PRIMARY KEY (`post_id`,`language_id`),
  ADD KEY `name` (`name`);

--
-- Indexes for table `supermart_openfoxxblog_subscribe_post`
--
ALTER TABLE `supermart_openfoxxblog_subscribe_post`
  ADD PRIMARY KEY (`subscribe_id`),
  ADD UNIQUE KEY `subscribe_email` (`subscribe_email`),
  ADD KEY `subscribe_id` (`subscribe_id`);

--
-- Indexes for table `supermart_openfoxxbuilder`
--
ALTER TABLE `supermart_openfoxxbuilder`
  ADD PRIMARY KEY (`module_uniqid_id`);

--
-- Indexes for table `supermart_openfoxxslidergroups`
--
ALTER TABLE `supermart_openfoxxslidergroups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supermart_openfoxxsliderlayers`
--
ALTER TABLE `supermart_openfoxxsliderlayers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `supermart_option`
--
ALTER TABLE `supermart_option`
  ADD PRIMARY KEY (`option_id`);

--
-- Indexes for table `supermart_option_description`
--
ALTER TABLE `supermart_option_description`
  ADD PRIMARY KEY (`option_id`,`language_id`);

--
-- Indexes for table `supermart_option_value`
--
ALTER TABLE `supermart_option_value`
  ADD PRIMARY KEY (`option_value_id`);

--
-- Indexes for table `supermart_option_value_description`
--
ALTER TABLE `supermart_option_value_description`
  ADD PRIMARY KEY (`option_value_id`,`language_id`);

--
-- Indexes for table `supermart_order`
--
ALTER TABLE `supermart_order`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `supermart_order_history`
--
ALTER TABLE `supermart_order_history`
  ADD PRIMARY KEY (`order_history_id`);

--
-- Indexes for table `supermart_order_option`
--
ALTER TABLE `supermart_order_option`
  ADD PRIMARY KEY (`order_option_id`);

--
-- Indexes for table `supermart_order_product`
--
ALTER TABLE `supermart_order_product`
  ADD PRIMARY KEY (`order_product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `supermart_order_recurring`
--
ALTER TABLE `supermart_order_recurring`
  ADD PRIMARY KEY (`order_recurring_id`);

--
-- Indexes for table `supermart_order_recurring_transaction`
--
ALTER TABLE `supermart_order_recurring_transaction`
  ADD PRIMARY KEY (`order_recurring_transaction_id`);

--
-- Indexes for table `supermart_order_shipment`
--
ALTER TABLE `supermart_order_shipment`
  ADD PRIMARY KEY (`order_shipment_id`);

--
-- Indexes for table `supermart_order_status`
--
ALTER TABLE `supermart_order_status`
  ADD PRIMARY KEY (`order_status_id`,`language_id`);

--
-- Indexes for table `supermart_order_total`
--
ALTER TABLE `supermart_order_total`
  ADD PRIMARY KEY (`order_total_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `supermart_order_voucher`
--
ALTER TABLE `supermart_order_voucher`
  ADD PRIMARY KEY (`order_voucher_id`);

--
-- Indexes for table `supermart_product`
--
ALTER TABLE `supermart_product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `supermart_product_attribute`
--
ALTER TABLE `supermart_product_attribute`
  ADD PRIMARY KEY (`product_id`,`attribute_id`,`language_id`);

--
-- Indexes for table `supermart_product_description`
--
ALTER TABLE `supermart_product_description`
  ADD PRIMARY KEY (`product_id`,`language_id`),
  ADD KEY `name` (`name`);

--
-- Indexes for table `supermart_product_discount`
--
ALTER TABLE `supermart_product_discount`
  ADD PRIMARY KEY (`product_discount_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `supermart_product_filter`
--
ALTER TABLE `supermart_product_filter`
  ADD PRIMARY KEY (`product_id`,`filter_id`);

--
-- Indexes for table `supermart_product_image`
--
ALTER TABLE `supermart_product_image`
  ADD PRIMARY KEY (`product_image_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `supermart_product_option`
--
ALTER TABLE `supermart_product_option`
  ADD PRIMARY KEY (`product_option_id`);

--
-- Indexes for table `supermart_product_option_value`
--
ALTER TABLE `supermart_product_option_value`
  ADD PRIMARY KEY (`product_option_value_id`);

--
-- Indexes for table `supermart_product_recurring`
--
ALTER TABLE `supermart_product_recurring`
  ADD PRIMARY KEY (`product_id`,`recurring_id`,`customer_group_id`);

--
-- Indexes for table `supermart_product_related`
--
ALTER TABLE `supermart_product_related`
  ADD PRIMARY KEY (`product_id`,`related_id`);

--
-- Indexes for table `supermart_product_reward`
--
ALTER TABLE `supermart_product_reward`
  ADD PRIMARY KEY (`product_reward_id`);

--
-- Indexes for table `supermart_product_special`
--
ALTER TABLE `supermart_product_special`
  ADD PRIMARY KEY (`product_special_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `supermart_product_to_category`
--
ALTER TABLE `supermart_product_to_category`
  ADD PRIMARY KEY (`product_id`,`category_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `supermart_product_to_download`
--
ALTER TABLE `supermart_product_to_download`
  ADD PRIMARY KEY (`product_id`,`download_id`);

--
-- Indexes for table `supermart_product_to_layout`
--
ALTER TABLE `supermart_product_to_layout`
  ADD PRIMARY KEY (`product_id`,`store_id`);

--
-- Indexes for table `supermart_product_to_store`
--
ALTER TABLE `supermart_product_to_store`
  ADD PRIMARY KEY (`product_id`,`store_id`);

--
-- Indexes for table `supermart_recurring`
--
ALTER TABLE `supermart_recurring`
  ADD PRIMARY KEY (`recurring_id`);

--
-- Indexes for table `supermart_recurring_description`
--
ALTER TABLE `supermart_recurring_description`
  ADD PRIMARY KEY (`recurring_id`,`language_id`);

--
-- Indexes for table `supermart_return`
--
ALTER TABLE `supermart_return`
  ADD PRIMARY KEY (`return_id`);

--
-- Indexes for table `supermart_return_action`
--
ALTER TABLE `supermart_return_action`
  ADD PRIMARY KEY (`return_action_id`,`language_id`);

--
-- Indexes for table `supermart_return_history`
--
ALTER TABLE `supermart_return_history`
  ADD PRIMARY KEY (`return_history_id`);

--
-- Indexes for table `supermart_return_reason`
--
ALTER TABLE `supermart_return_reason`
  ADD PRIMARY KEY (`return_reason_id`,`language_id`);

--
-- Indexes for table `supermart_return_status`
--
ALTER TABLE `supermart_return_status`
  ADD PRIMARY KEY (`return_status_id`,`language_id`);

--
-- Indexes for table `supermart_review`
--
ALTER TABLE `supermart_review`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `supermart_seo_url`
--
ALTER TABLE `supermart_seo_url`
  ADD PRIMARY KEY (`seo_url_id`),
  ADD KEY `query` (`query`),
  ADD KEY `keyword` (`keyword`);

--
-- Indexes for table `supermart_session`
--
ALTER TABLE `supermart_session`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `supermart_setting`
--
ALTER TABLE `supermart_setting`
  ADD PRIMARY KEY (`setting_id`);

--
-- Indexes for table `supermart_shipping_courier`
--
ALTER TABLE `supermart_shipping_courier`
  ADD PRIMARY KEY (`shipping_courier_id`);

--
-- Indexes for table `supermart_statistics`
--
ALTER TABLE `supermart_statistics`
  ADD PRIMARY KEY (`statistics_id`);

--
-- Indexes for table `supermart_stock_status`
--
ALTER TABLE `supermart_stock_status`
  ADD PRIMARY KEY (`stock_status_id`,`language_id`);

--
-- Indexes for table `supermart_store`
--
ALTER TABLE `supermart_store`
  ADD PRIMARY KEY (`store_id`);

--
-- Indexes for table `supermart_tax_class`
--
ALTER TABLE `supermart_tax_class`
  ADD PRIMARY KEY (`tax_class_id`);

--
-- Indexes for table `supermart_tax_rate`
--
ALTER TABLE `supermart_tax_rate`
  ADD PRIMARY KEY (`tax_rate_id`);

--
-- Indexes for table `supermart_tax_rate_to_customer_group`
--
ALTER TABLE `supermart_tax_rate_to_customer_group`
  ADD PRIMARY KEY (`tax_rate_id`,`customer_group_id`);

--
-- Indexes for table `supermart_tax_rule`
--
ALTER TABLE `supermart_tax_rule`
  ADD PRIMARY KEY (`tax_rule_id`);

--
-- Indexes for table `supermart_theme`
--
ALTER TABLE `supermart_theme`
  ADD PRIMARY KEY (`theme_id`);

--
-- Indexes for table `supermart_translation`
--
ALTER TABLE `supermart_translation`
  ADD PRIMARY KEY (`translation_id`);

--
-- Indexes for table `supermart_upload`
--
ALTER TABLE `supermart_upload`
  ADD PRIMARY KEY (`upload_id`);

--
-- Indexes for table `supermart_user`
--
ALTER TABLE `supermart_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `supermart_user_group`
--
ALTER TABLE `supermart_user_group`
  ADD PRIMARY KEY (`user_group_id`);

--
-- Indexes for table `supermart_verticalmenu`
--
ALTER TABLE `supermart_verticalmenu`
  ADD PRIMARY KEY (`verticalmenu_id`);

--
-- Indexes for table `supermart_verticalmenu_description`
--
ALTER TABLE `supermart_verticalmenu_description`
  ADD PRIMARY KEY (`verticalmenu_id`,`language_id`),
  ADD KEY `name` (`title`);

--
-- Indexes for table `supermart_verticalmenu_widgets`
--
ALTER TABLE `supermart_verticalmenu_widgets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supermart_voucher`
--
ALTER TABLE `supermart_voucher`
  ADD PRIMARY KEY (`voucher_id`);

--
-- Indexes for table `supermart_voucher_history`
--
ALTER TABLE `supermart_voucher_history`
  ADD PRIMARY KEY (`voucher_history_id`);

--
-- Indexes for table `supermart_voucher_theme`
--
ALTER TABLE `supermart_voucher_theme`
  ADD PRIMARY KEY (`voucher_theme_id`);

--
-- Indexes for table `supermart_voucher_theme_description`
--
ALTER TABLE `supermart_voucher_theme_description`
  ADD PRIMARY KEY (`voucher_theme_id`,`language_id`);

--
-- Indexes for table `supermart_weight_class`
--
ALTER TABLE `supermart_weight_class`
  ADD PRIMARY KEY (`weight_class_id`);

--
-- Indexes for table `supermart_weight_class_description`
--
ALTER TABLE `supermart_weight_class_description`
  ADD PRIMARY KEY (`weight_class_id`,`language_id`);

--
-- Indexes for table `supermart_zone`
--
ALTER TABLE `supermart_zone`
  ADD PRIMARY KEY (`zone_id`);

--
-- Indexes for table `supermart_zone_to_geo_zone`
--
ALTER TABLE `supermart_zone_to_geo_zone`
  ADD PRIMARY KEY (`zone_to_geo_zone_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `supermart_address`
--
ALTER TABLE `supermart_address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `supermart_api`
--
ALTER TABLE `supermart_api`
  MODIFY `api_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `supermart_api_ip`
--
ALTER TABLE `supermart_api_ip`
  MODIFY `api_ip_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `supermart_api_session`
--
ALTER TABLE `supermart_api_session`
  MODIFY `api_session_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supermart_attribute`
--
ALTER TABLE `supermart_attribute`
  MODIFY `attribute_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `supermart_attribute_group`
--
ALTER TABLE `supermart_attribute_group`
  MODIFY `attribute_group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `supermart_banner`
--
ALTER TABLE `supermart_banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `supermart_banner_image`
--
ALTER TABLE `supermart_banner_image`
  MODIFY `banner_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=268;

--
-- AUTO_INCREMENT for table `supermart_cart`
--
ALTER TABLE `supermart_cart`
  MODIFY `cart_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `supermart_category`
--
ALTER TABLE `supermart_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `supermart_country`
--
ALTER TABLE `supermart_country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=258;

--
-- AUTO_INCREMENT for table `supermart_coupon`
--
ALTER TABLE `supermart_coupon`
  MODIFY `coupon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `supermart_coupon_history`
--
ALTER TABLE `supermart_coupon_history`
  MODIFY `coupon_history_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_coupon_product`
--
ALTER TABLE `supermart_coupon_product`
  MODIFY `coupon_product_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_currency`
--
ALTER TABLE `supermart_currency`
  MODIFY `currency_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supermart_customer`
--
ALTER TABLE `supermart_customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `supermart_customer_activity`
--
ALTER TABLE `supermart_customer_activity`
  MODIFY `customer_activity_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_customer_approval`
--
ALTER TABLE `supermart_customer_approval`
  MODIFY `customer_approval_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_customer_group`
--
ALTER TABLE `supermart_customer_group`
  MODIFY `customer_group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `supermart_customer_history`
--
ALTER TABLE `supermart_customer_history`
  MODIFY `customer_history_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_customer_ip`
--
ALTER TABLE `supermart_customer_ip`
  MODIFY `customer_ip_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `supermart_customer_login`
--
ALTER TABLE `supermart_customer_login`
  MODIFY `customer_login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `supermart_customer_reward`
--
ALTER TABLE `supermart_customer_reward`
  MODIFY `customer_reward_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_customer_search`
--
ALTER TABLE `supermart_customer_search`
  MODIFY `customer_search_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_customer_transaction`
--
ALTER TABLE `supermart_customer_transaction`
  MODIFY `customer_transaction_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_custom_field`
--
ALTER TABLE `supermart_custom_field`
  MODIFY `custom_field_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_custom_field_value`
--
ALTER TABLE `supermart_custom_field_value`
  MODIFY `custom_field_value_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_download`
--
ALTER TABLE `supermart_download`
  MODIFY `download_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `supermart_event`
--
ALTER TABLE `supermart_event`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `supermart_extension`
--
ALTER TABLE `supermart_extension`
  MODIFY `extension_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT for table `supermart_extension_install`
--
ALTER TABLE `supermart_extension_install`
  MODIFY `extension_install_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `supermart_extension_path`
--
ALTER TABLE `supermart_extension_path`
  MODIFY `extension_path_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9277;

--
-- AUTO_INCREMENT for table `supermart_filter`
--
ALTER TABLE `supermart_filter`
  MODIFY `filter_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `supermart_filter_group`
--
ALTER TABLE `supermart_filter_group`
  MODIFY `filter_group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supermart_geo_zone`
--
ALTER TABLE `supermart_geo_zone`
  MODIFY `geo_zone_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `supermart_information`
--
ALTER TABLE `supermart_information`
  MODIFY `information_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `supermart_language`
--
ALTER TABLE `supermart_language`
  MODIFY `language_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supermart_layout`
--
ALTER TABLE `supermart_layout`
  MODIFY `layout_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `supermart_layout_module`
--
ALTER TABLE `supermart_layout_module`
  MODIFY `layout_module_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=552;

--
-- AUTO_INCREMENT for table `supermart_layout_route`
--
ALTER TABLE `supermart_layout_route`
  MODIFY `layout_route_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=293;

--
-- AUTO_INCREMENT for table `supermart_length_class`
--
ALTER TABLE `supermart_length_class`
  MODIFY `length_class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supermart_location`
--
ALTER TABLE `supermart_location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `supermart_lsmultivendor_payment_done_history`
--
ALTER TABLE `supermart_lsmultivendor_payment_done_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_lsm_enquiry`
--
ALTER TABLE `supermart_lsm_enquiry`
  MODIFY `enquiry_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_lsm_enquiry_message`
--
ALTER TABLE `supermart_lsm_enquiry_message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_lsm_review`
--
ALTER TABLE `supermart_lsm_review`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_manufacturer`
--
ALTER TABLE `supermart_manufacturer`
  MODIFY `manufacturer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `supermart_marketing`
--
ALTER TABLE `supermart_marketing`
  MODIFY `marketing_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_megamenu`
--
ALTER TABLE `supermart_megamenu`
  MODIFY `megamenu_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `supermart_megamenu_widgets`
--
ALTER TABLE `supermart_megamenu_widgets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `supermart_modification`
--
ALTER TABLE `supermart_modification`
  MODIFY `modification_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `supermart_module`
--
ALTER TABLE `supermart_module`
  MODIFY `module_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `supermart_openfoxnewsletter_draft`
--
ALTER TABLE `supermart_openfoxnewsletter_draft`
  MODIFY `draft_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_openfoxnewsletter_email`
--
ALTER TABLE `supermart_openfoxnewsletter_email`
  MODIFY `email_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_openfoxnewsletter_history`
--
ALTER TABLE `supermart_openfoxnewsletter_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_openfoxnewsletter_subscribe`
--
ALTER TABLE `supermart_openfoxnewsletter_subscribe`
  MODIFY `subscribe_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `supermart_openfoxnewsletter_template`
--
ALTER TABLE `supermart_openfoxnewsletter_template`
  MODIFY `template_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_openfoxxblog_category`
--
ALTER TABLE `supermart_openfoxxblog_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `supermart_openfoxxblog_comment`
--
ALTER TABLE `supermart_openfoxxblog_comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `supermart_openfoxxblog_post`
--
ALTER TABLE `supermart_openfoxxblog_post`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `supermart_openfoxxblog_subscribe_post`
--
ALTER TABLE `supermart_openfoxxblog_subscribe_post`
  MODIFY `subscribe_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_openfoxxslidergroups`
--
ALTER TABLE `supermart_openfoxxslidergroups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `supermart_openfoxxsliderlayers`
--
ALTER TABLE `supermart_openfoxxsliderlayers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `supermart_option`
--
ALTER TABLE `supermart_option`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `supermart_option_value`
--
ALTER TABLE `supermart_option_value`
  MODIFY `option_value_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=292;

--
-- AUTO_INCREMENT for table `supermart_order`
--
ALTER TABLE `supermart_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `supermart_order_history`
--
ALTER TABLE `supermart_order_history`
  MODIFY `order_history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `supermart_order_option`
--
ALTER TABLE `supermart_order_option`
  MODIFY `order_option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supermart_order_product`
--
ALTER TABLE `supermart_order_product`
  MODIFY `order_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `supermart_order_recurring`
--
ALTER TABLE `supermart_order_recurring`
  MODIFY `order_recurring_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_order_recurring_transaction`
--
ALTER TABLE `supermart_order_recurring_transaction`
  MODIFY `order_recurring_transaction_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_order_shipment`
--
ALTER TABLE `supermart_order_shipment`
  MODIFY `order_shipment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_order_status`
--
ALTER TABLE `supermart_order_status`
  MODIFY `order_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `supermart_order_total`
--
ALTER TABLE `supermart_order_total`
  MODIFY `order_total_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `supermart_order_voucher`
--
ALTER TABLE `supermart_order_voucher`
  MODIFY `order_voucher_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_product`
--
ALTER TABLE `supermart_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=215;

--
-- AUTO_INCREMENT for table `supermart_product_discount`
--
ALTER TABLE `supermart_product_discount`
  MODIFY `product_discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=507;

--
-- AUTO_INCREMENT for table `supermart_product_image`
--
ALTER TABLE `supermart_product_image`
  MODIFY `product_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3640;

--
-- AUTO_INCREMENT for table `supermart_product_option`
--
ALTER TABLE `supermart_product_option`
  MODIFY `product_option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=364;

--
-- AUTO_INCREMENT for table `supermart_product_option_value`
--
ALTER TABLE `supermart_product_option_value`
  MODIFY `product_option_value_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=530;

--
-- AUTO_INCREMENT for table `supermart_product_reward`
--
ALTER TABLE `supermart_product_reward`
  MODIFY `product_reward_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=975;

--
-- AUTO_INCREMENT for table `supermart_product_special`
--
ALTER TABLE `supermart_product_special`
  MODIFY `product_special_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=542;

--
-- AUTO_INCREMENT for table `supermart_recurring`
--
ALTER TABLE `supermart_recurring`
  MODIFY `recurring_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_return`
--
ALTER TABLE `supermart_return`
  MODIFY `return_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_return_action`
--
ALTER TABLE `supermart_return_action`
  MODIFY `return_action_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supermart_return_history`
--
ALTER TABLE `supermart_return_history`
  MODIFY `return_history_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_return_reason`
--
ALTER TABLE `supermart_return_reason`
  MODIFY `return_reason_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `supermart_return_status`
--
ALTER TABLE `supermart_return_status`
  MODIFY `return_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supermart_review`
--
ALTER TABLE `supermart_review`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `supermart_seo_url`
--
ALTER TABLE `supermart_seo_url`
  MODIFY `seo_url_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2043;

--
-- AUTO_INCREMENT for table `supermart_setting`
--
ALTER TABLE `supermart_setting`
  MODIFY `setting_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11038;

--
-- AUTO_INCREMENT for table `supermart_statistics`
--
ALTER TABLE `supermart_statistics`
  MODIFY `statistics_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `supermart_stock_status`
--
ALTER TABLE `supermart_stock_status`
  MODIFY `stock_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `supermart_store`
--
ALTER TABLE `supermart_store`
  MODIFY `store_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `supermart_tax_class`
--
ALTER TABLE `supermart_tax_class`
  MODIFY `tax_class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `supermart_tax_rate`
--
ALTER TABLE `supermart_tax_rate`
  MODIFY `tax_rate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `supermart_tax_rule`
--
ALTER TABLE `supermart_tax_rule`
  MODIFY `tax_rule_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `supermart_theme`
--
ALTER TABLE `supermart_theme`
  MODIFY `theme_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_translation`
--
ALTER TABLE `supermart_translation`
  MODIFY `translation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `supermart_upload`
--
ALTER TABLE `supermart_upload`
  MODIFY `upload_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_user`
--
ALTER TABLE `supermart_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `supermart_user_group`
--
ALTER TABLE `supermart_user_group`
  MODIFY `user_group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `supermart_verticalmenu`
--
ALTER TABLE `supermart_verticalmenu`
  MODIFY `verticalmenu_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `supermart_verticalmenu_widgets`
--
ALTER TABLE `supermart_verticalmenu_widgets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `supermart_voucher`
--
ALTER TABLE `supermart_voucher`
  MODIFY `voucher_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_voucher_history`
--
ALTER TABLE `supermart_voucher_history`
  MODIFY `voucher_history_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supermart_voucher_theme`
--
ALTER TABLE `supermart_voucher_theme`
  MODIFY `voucher_theme_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `supermart_weight_class`
--
ALTER TABLE `supermart_weight_class`
  MODIFY `weight_class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `supermart_zone`
--
ALTER TABLE `supermart_zone`
  MODIFY `zone_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4239;

--
-- AUTO_INCREMENT for table `supermart_zone_to_geo_zone`
--
ALTER TABLE `supermart_zone_to_geo_zone`
  MODIFY `zone_to_geo_zone_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
