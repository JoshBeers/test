class starsPainter{
    paint(ctx, geom, properties){

        const numberOfStars = geom.height * geom.width /200;

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.rect(geom.width, geom.height, 0, 0);
        ctx.fill();

        /*

        for(let i=0; i< numberOfStars; i++){
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.rect(Math.random()*geom.width, Math.random()*geom.hieght, 5, 5);
            ctx.fill();
        }
        */


    }
}

registerPaint('stars',starsPainter);
