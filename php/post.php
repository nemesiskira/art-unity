<?php
try{
    $link = new \PDO(   'mysql:host=localhost;dbname=art_unity;charset=utf8mb4',
                        'root',
                        '',
                        array(
                            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                            \PDO::ATTR_PERSISTENT => false
                        )
                    );
 
    $handle = $link->prepare('SELECT posts.*, usuarios.nombre 
                                FROM posts
                                INNER JOIN usuarios ON posts.usuario = usuarios.usuario
                                WHERE posts.id_post = ?');

    $handle->bindValue(1, $_GET['id'], PDO::PARAM_INT);
    $handle->execute();
 
    $result = $handle->fetchAll(\PDO::FETCH_OBJ);
 
    echo(json_encode($result));
}
catch(\PDOException $ex){
    print($ex->getMessage());
}
?>