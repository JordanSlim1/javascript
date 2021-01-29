/*Exercise instructions : take the html code from the following codepen: 
ps://codepen.io/ayunas-the-scripter/pen/WNQgpqB, 
and use JavaScript DOM manipulation to inject the html into the 
inject id element of inject.html. 
You are not allowed to simply set the innerHTML of the <div>
to the entire html document. 
*/
/*
<center>
  <h1><i>HTML Practice Exercise TEKcamp.</i></h1>
  <h2><a href="">TEKsystems "TEKcamp"</a></h2>
</center>

<hr />
<p>I love <i>HTML</i> for the following reasons:</p>
<ol>
  <li>I learned it quickly.</li>
  <li>I can make web pages using code
<li> It’s fun.</li>
</ol>
<hr />
  <p>My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.</p>
<h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day.  
-[Team "Git'er Done"]
*/
var divTag = document.getElementById("inject");
var cent = document.createElement('center');
var olist = document.createElement('ol');
var list = document.createElement('li');
var list2 = document.createElement('li');
var list3 = document.createElement('li');
var link = document.createElement('a');
var link2 = document.createElement('a');
var line = document.createElement('hr');
var line2 = document.createElement('hr');
var para = document.createElement('p');
var para2 = document.createElement('p');
var bottomhead = document.createElement('h1');
var italy = document.createElement('i');

var head1 = document.createElement('h1');
divTag.appendChild(cent);
cent.appendChild(head1);
head1.appendChild(italy);
italy.textContent = 'HTML Practice Exercise TEKcamp';

var head2 = document.createElement('h2');
cent.appendChild(head2);
head2.appendChild(link);
link.textContent = 'TEKsystems "TEKcamp"';
link.setAttribute('href', '');

divTag.appendChild(line);

divTag.appendChild(para);
para.textContent = 'I love HTML for the following reasons: ';

divTag.appendChild(olist);
divTag.appendChild(list);
divTag.appendChild(list2);
divTag.appendChild(list3);

list.textContent= 'I learned it quickly.';
list2.textContent = 'I can make web pages using code';
list3.textContent = 'It’s fun.';

divTag.appendChild(line2);

divTag.appendChild(para2);
para2.textContent = 'My instructor’s email address is:'

para2.appendChild(link2);
link2.textContent = 'ayunas@teksystems.com';
link2.setAttribute('href', 'ayunas@teksystems.com');

divTag.appendChild(bottomhead);
bottomhead.textContent = 'Have a great day!';

divTag.appendChild= 'I really look forward to learning how to code!  Have a great day.  ';
