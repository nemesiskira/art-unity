<?php
try {

    $init = intval($_GET['pagInit']);
    $last = intval($_GET['pagLast']);

    $link = new \PDO(   'mysql:host=localhost;dbname=art_unity;charset=utf8mb4',
                        'root',
                        '',
                        array(
                            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                            \PDO::ATTR_PERSISTENT => false
                        )
                    );
    $totalitems = $link->prepare('SELECT COUNT(posts.id_post) 
                                FROM posts
                                INNER JOIN usuarios ON posts.usuario = usuarios.usuario');

    $totalitems->execute();
 
    $posts = $link->prepare('SELECT posts.*, usuarios.nombre 
                                FROM posts
                                INNER JOIN usuarios ON posts.usuario = usuarios.usuario
                                LIMIT ?, ?');

    $posts->bindValue(1, $init, PDO::PARAM_INT);
    $posts->bindValue(2, $last, PDO::PARAM_INT);
    $posts->execute();
 
    $result = $posts->fetchAll(\PDO::FETCH_OBJ);
 
    $resultado = {
        "totalItems": $totalitems,
        "posts": $result
    };
    echo(json_encode($result));
}
catch(\PDOException $ex){
    print($ex->getMessage());
}
?>