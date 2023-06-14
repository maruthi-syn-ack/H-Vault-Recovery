<script>
    import { Button, Card } from "flowbite-svelte";
</script>

<div class="login_card">
    <Card>
        <Button pill size="xl" outline color="yellow"
            ><a href="Login/Doctor">Doctor Login</a></Button
        >
        <br />
        <Button pill size="xl" outline color="yellow"
            ><a href="Login/Patient">Patient Login</a></Button
        >
        <br />
        <Button pill size="xl" outline color="yellow"
            ><a href="Login/Insurance_provider">Insurance Provider Login</a
            ></Button
        >
    </Card>
</div>

<style>
    .login_card {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
