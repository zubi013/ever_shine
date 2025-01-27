<script>
    let {img, alt, cover = false} = $props()
</script>


    <img src={ img } alt={alt}
    
    style={cover? "object-fit: cover;" : ''}
    
    >


<style>

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>