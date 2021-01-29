<template>
    <div id="footer">
        <div class="footer-content">
            Privacy Policy | Terms & Conditions
        </div>        
    </div>    
</template>

<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
    #footer {
        clear: both;
        position: relative;
        bottom: 0;
        width: 100%;
        background-color: #f1f1f1;
        height: 200px;
    }
    .footer-content{
        float: right;
        padding: 100px 100px 0px 100px;
        color: #cccccc;
        font-weight: bolder;                                                                
    }
</style>