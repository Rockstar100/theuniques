<aside class="qodef-sidebar">
                                            
                                            <div class="widget widget_categories">
                                                <h4>Categories</h4>
                                                <?php
                            $categories = getAllCategory($db);
                            $count = 1;
                            foreach ($categories as $ct) {
                            ?>
                                                <ul>
                                                    <li class="cat-item cat-item-93"><a href="#"><?= $ct['name'] ?></a> 
                                                    </li>
                                                    <!-- <li class="cat-item cat-item-64"><a href="#">Conference</a> (4)
                                                    </li>
                                                    <li class="cat-item cat-item-27"><a href="#">Ideas</a> (12)
                                                    </li>
                                                    <li class="cat-item cat-item-23"><a href="#">Innovation</a> (8)
                                                    </li>
                                                    <li class="cat-item cat-item-94"><a href="#">Marketing</a> (4)
                                                    </li>
                                                    <li class="cat-item cat-item-92"><a href="#">Membership</a> (3)
                                                    </li>
                                                    <li class="cat-item cat-item-24"><a href="#">Mobile</a> (8)
                                                    </li>
                                                    <li class="cat-item cat-item-86"><a href="#">Optimization</a> (4)
                                                    </li>
                                                    <li class="cat-item cat-item-26"><a href="#">Sustainable</a> (8)
                                                    </li>
                                                    <li class="cat-item cat-item-22"><a href="#">Technology</a> (8)
                                                    </li>
                                                    <li class="cat-item cat-item-25"><a href="#">Trends</a> (11)
                                                    </li> -->
                                                </ul>
                                                <?php
                              $count++;
                            }
                            ?>
                                            </div>
                                           
                                           
                                        </aside>