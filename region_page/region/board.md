---
layout: page         
title: Central Plains Regional Board
permalink: /region/board.html
---

<div class="container my-5">

  <div class="row">
    {%- assign members = site.data.board -%} 
    {%- for m in members -%}
      <div class="col-sm-6 col-lg-4 d-flex mb-4">
        <div class="card w-100 h-100 shadow-sm">

          {%- if m.photo %}
            <img class="card-img-top img-fluid"
                 src="{{ m.photo | relative_url }}"
                 alt="{{ m.name }} headshot">
          {%- endif %}

          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-1">{{ m.name }}</h5>
            <p class="font-weight-bold mb-1">{{ m.position }}</p>

            {%- if m.affiliation %}
              <p class="text-muted mb-1">{{ m.affiliation }}</p>
            {%- endif %}

            {%- if m.expires %}
              <p class="mb-3"><small>Term expires {{ m.expires }}</small></p>
            {%- endif %}

            <!-- contact buttons sit at the bottom of the card -->
            <div class="mt-auto">
              {%- if m.email %}
                <a class="btn btn-sm btn-outline-primary mr-1"
                   href="mailto:{{ m.email }}" aria-label="email">
                   <i class="fa fa-envelope"></i>
                </a>
              {%- endif %}
              {%- if m.linkedin %}
                <a class="btn btn-sm btn-outline-primary mr-1"
                   href="{{ m.linkedin }}" target="_blank" rel="noopener"
                   aria-label="LinkedIn">
                   <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
              {%- endif %}
              {%- if m.web %}
                <a class="btn btn-sm btn-outline-primary"
                   href="{{ m.web }}" target="_blank" rel="noopener"
                   aria-label="Website">
                   <i class="fa fa-globe"></i>
                </a>
              {%- endif %}
            </div>
          </div><!--/.card-body-->
        </div><!--/.card-->
      </div><!--/.col-->
    {%- endfor %}
  </div><!--/.row-->
</div><!--/.container-->
