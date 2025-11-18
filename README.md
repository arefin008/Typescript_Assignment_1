## Answer No 1:
Interface এবং Type alias object বা data structure defined  করার জন্য ব্যবহৃত হয় | কিন্তু তাদের মধ্যে কিছু পার্থক্য রয়েছে।

| Interface  | Type |
|-------|-----|
| Interface extends কীওয়ার্ড ব্যবহার করে সহজেই এক্সটেন্ড করা যায়  | Type-কে এক্সটেন্ড করার জন্য intersection ব্যবহার করতে হয়।  |
| সাধারণত object-এর structure define করতে ব্যবহৃত হয় | Object, primitive, union, intersection — সবকিছু define করতে পারে  |
| একই নামের একাধিক interface merge হয়ে যায়। | Type alias merge করা যায় না, একবার কোনো টাইপ এলিয়াস defined করা হলে, তার shape fixed হয়ে যায়।  |

