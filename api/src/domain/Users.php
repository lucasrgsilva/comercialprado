<?php

/**
 * Created by PhpStorm.
 * User: rafaellucio
 * Date: 29/02/16
 * Time: 00:02
 */
class Users {
    private $name;
    private $email;

    function __construct() {
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getEmail() {
        return $this->email;
    }

    public function setEmail($email) {
        $this->email = $email;
    }
}