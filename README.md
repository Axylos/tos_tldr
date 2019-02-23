# Service TOS tl;dr

## Routes

##### `GET /search/?service=:service_name`
- return a service object
- name: String
-pints: Array<point>
- links: Array<link>

link: 
	name: string
	url: <url>

point: 
	titls: string
	toddr:
	
```js

		"tosdr": {
        "binding": true,
        "case": "They may stop providing the service at any time",
        "point": "bad",
        "score": 40,
        "tldr": "“Google may also stop providing Services to you, or add or create new limits to our Services at any time.” Google has no obligation from the terms to give you notice in advance or to give a reason for that termination"
      }
      ```
      
##### `GET /experiences/:id/`
- experience:
	- user_id: string
	- service: string
	- reading_level <"not_read" | "read_q" | "read_nq"
	- review: text
	- comments: Array<comment>
	
- comment
	- author_id: string
	- text: text
	
##### `POST /experiences/`
_post body:_

- reading_level <"not_read" | "read_q" | "read_nq"
- review: text
- service_name: string

##### `POST /experiences/:id/comments/`
_Post Body_
- text: string

##### `GET /user/experiences/`
_Return_
- experiences: Array<experiences>

##### `DELETE /experiences/:id/`
ok

##### `GET /service/:service_name/experiences/`
_Return:_
Array<experiences>