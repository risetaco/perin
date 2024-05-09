<!DOCTYPE html>
<html>
<body>
    <p>Kepada Yth. Kemenperin</p>

    <br/>
    <p>Informasi Pengirim:</p>
    <p>Nama: {{$mailData['name']}}</p>
    <p>Email: {{$mailData['email']}}</p>
    <p>Telepon: {{$mailData['phone']}} </p>
    <br />
    <p>Perihal: {{ $mailData['title'] }}</p>
    <br />
    <p>{{ $mailData['content'] }}</p>

    <br />
    <br />
    <p>Terima kasih</p>
    <p>Salamt Hormat,</p>
    <p>{{$mailData['name']}}</p>
</body>
</html>