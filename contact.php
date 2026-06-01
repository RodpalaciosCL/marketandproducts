<?php
/**
 * Contact form handler — Market and Products landing.
 * Deploy to public_html/ alongside index.html (requires PHP on host).
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

// Honeypot — bots only
if (!empty(trim((string) ($_POST['website'] ?? '')))) {
    echo json_encode(['ok' => true]);
    exit;
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$company = trim((string) ($_POST['company'] ?? ''));
$industry = trim((string) ($_POST['industry'] ?? ''));
$industryLabel = trim((string) ($_POST['industry_label'] ?? $industry));
$message = trim((string) ($_POST['message'] ?? ''));
$lang = strtolower(trim((string) ($_POST['lang'] ?? 'en')));

if ($name === '' || $email === '' || $industry === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'missing_fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_email']);
    exit;
}

if (mb_strlen($name) > 200 || mb_strlen($email) > 200 || mb_strlen($company) > 200
    || mb_strlen($industryLabel) > 100 || mb_strlen($message) > 8000) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'field_too_long']);
    exit;
}

$to = 'rodrigo@airontechs.com';
$subject = $lang === 'es'
    ? 'Consulta — Market and Products'
    : 'Inquiry — Market and Products';

$bodyLines = [
    "Name: {$name}",
    "Email: {$email}",
];
if ($company !== '') {
    $bodyLines[] = "Company: {$company}";
}
$bodyLines[] = "Industry: {$industryLabel}";
$bodyLines[] = '';
$bodyLines[] = $message;
$body = implode("\n", $bodyLines);

$fromAddress = 'noreply@marketandproducts.com';
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Market and Products <' . $fromAddress . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
]);

$sent = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send_failed']);
    exit;
}

echo json_encode(['ok' => true]);
