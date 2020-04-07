<template>
    <ion-content
            :scrollEvents="true"
            @ionScrollStart="logScrollStart()"
            @ionScroll="logScrolling($event)"
            @ionScrollEnd="logScrollEnd()">
        <ion-header translucent>
            <ion-toolbar>
                <ion-title>Card</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content fullscreen>
            <ion-card>
                <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg"/>
                <ion-card-header>
                    <ion-card-subtitle>Destination</ion-card-subtitle>
                    <ion-card-title>Madison, WI</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of
                    the Wisconsin Territory in 1836.
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-content>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            logScrollStart() {
                console.log('foo');
            },

            logScrolling(e) {
                console.log(e);
            },

            logScrollEnd() {
                console.log('bar');
            }
        }
    }
</script>

<style scoped>
    :root {
        --ion-safe-area-top: 20px;
        --ion-safe-area-bottom: 22px;
    }
</style>
