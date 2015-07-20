/**
 * Logger class that prints each request to the process' stdout stream.
 * @param request
 * @param response
 * @param next
 */
module.exports = function(request,response,next){

    var stream = process.stdout;
    var url = request.url;
    var method = request.method;

    var message = method + " on "+ url+"\n";
    stream.write(message);

    next();
}