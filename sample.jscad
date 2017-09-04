//var h = hull( square(10),circle(10).translate([10,10,0]) );
//linear_extrude({ height: 10 }, h);

//rectangular_extrude([ [10,10], [-10,10], [-20,0], [-10,-10], [10,-10] ],  // path is an array of 2d coords
//    {w: 1, h: 3, closed: true});

function main() {
   //var h = hull( square(10),circle(10).translate([10,10,0]) );
   //return linear_extrude({ height: 10 }, h);
   
   return rectangular_extrude([ [10,10], [-10,10], [-20,0], [-10,-10], [10,-10] ],  // path is an array of 2d coords
    {w: 1, h: 3, closed: true});
}
