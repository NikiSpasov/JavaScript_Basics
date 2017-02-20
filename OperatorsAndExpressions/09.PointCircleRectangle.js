function PointCircleRectangle([x, y]) {
    const insideCircle = Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= Math.pow(1.5, 2);
    const insideRectangle = ((x >= -1 && x <= 5) && (y >= -1 && y <= 1));
        
        if (insideCircle == true && insideRectangle == true)
        {
            console.log("inside circle inside rectangle");
        }
        else if (insideCircle == false && insideRectangle == true) {
            console.log("outside circle inside rectangle");
        }
        else if (insideCircle == true && insideRectangle == false) {
            console.log("inside circle outside rectangle");
        }
        else if (insideCircle == false && insideRectangle == false) {
            console.log("outside circle outside rectangle");
        }
    }
    PointCircleRectangle(['1', '2']);