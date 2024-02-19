<?php

$filePath = 'files/example.txt';
$fileContent = 'Hello, World!';

if (!file_exists('files')) {
    mkdir('files', 0777, true);
}

file_put_contents($filePath, $fileContent);

echo 'File created successfully!';
?>
