
<?php
    $yourName = $_POST['yourName'];
    $yourEmail = $_POST['yourEmail'];
    $proType = $_POST['proType'];
    $parag = $_POST['parag'];

    $conn = new mysqli('localhosts','root','','emporium-1');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("INSERT INTO contact(yourName, yourEmail, proType, parag)
            values(?, ?, ?, ?)");
        $stmt->bind_param("ssss",$yourName, $yourEmail, $proType, $parag);
        $stmt->execute();
        echo "Contact form filled Sucessfully...";
        $stmt->close();
        $conn->close();
    }
?>