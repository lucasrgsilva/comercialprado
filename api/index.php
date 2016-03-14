<?php
/**
 * Created by PhpStorm.
 * User: rafaellucio
 * Date: 28/02/16
 * Time: 23:56
 */

include('src/domain/Users.php');

$user = new Users();
$user->setName("Rafael Antonio Lucio");
$user->setEmail("rafaelantoniolucio@gmail.com");

echo 'Nome: ' .$user->getName();
echo '<br>';
echo 'E-mail: ' . $user->getEmail();